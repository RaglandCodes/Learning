const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
  auth: {
    user: 'admin',
    password: ''
  }
});

const dbName = 'customers';
const viewUrl = '_design/all_customers/_view/all';
couch.listDatabases().then(dbs => {
  console.log(`${dbs} <== dbs\n\n`);
});
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  couch.get(dbName, viewUrl).then(
    (data, headers, status) => {
      console.log(`${data} <== data\n\n`);

      res.render('index', {
        customers: data.data.rows
      });
    },
    err => {
      res.send(err);
    }
  );
});

app.post('/customer/add', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  couch.uniqid().then(ids => {
    const id = ids[0];

    couch
      .insert('customers', {
        _id: id,
        name: name,
        email: email
      })
      .then(
        (err, headers, status) => {
          res.redirect('/');
        },
        err => {
          res.send(err);
        }
      );
  });
  res.send();
});
app.listen(3345, () => {
  console.log('Runnning at 3345');
});
