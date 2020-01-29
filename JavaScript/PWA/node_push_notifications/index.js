const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));
const publicVapidKey =
  'BERlEuDfLGjwwVxRe6cUhaiLQHFPTiy8UhUtXkKGvDZM-hJESKEeffFqQ_gvVM09xuXgIJe9JitbNZijJz5mbpg';

const privateVapidKey = 'hkaN6MZDJ0djiASn5aKqggDVDY1fr4pgY1NI6i1-9wI';

webpush.setVapidDetails(
  'mailto:test@test.com',
  publicVapidKey,
  privateVapidKey
);

//Subscribe route
app.post('/subscribe', (q, a) => {
  //Get push subscription object

  const subscription = q.body;

  console.log(`${JSON.stringify(q.body, null, 2)} <== q.body \n`);

  a.status(201).json({});

  const payload = JSON.stringify({ title: 'Push test' });

  webpush
    .sendNotification(subscription, payload)
    .catch(webpushSendNotificationError => {
      console.log(
        `${webpushSendNotificationError} <== webpushSendNotificationError\n\n`
      );
    });
});

app.listen(5544);
