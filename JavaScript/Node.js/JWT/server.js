const express = require("express");
const app = express();

const jwt =  require("jsonwebtoken")

const posts = [
  {
    name:"Ragland",
    title:"Title Ragland"
  },
  {
    name:"Name",
    title:"Title Name"
  }
]

app.use(express.json());

app.get("/posts", (q, a) => {

})

app.post("/login", (q, a) => {
  const userName = req.body.username;
  const user = {name:userName}

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json(accessToken)

})

app.listen(9090)
