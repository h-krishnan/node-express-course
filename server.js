const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mockUserData=[
  {name: 'Mark'},
  {name: 'Jill'}
]
app.get('/users', function(req, res) {
  res.json({
           success: true,
           message: 'successfully got users!',
           users: mockUserData
  })
})
app.get('/users/:id', function(req, res) {
  console.log(req.params.id)
  res.json({
          success: true,
          message: 'got one user',
          user: req.params.id
  })
})
app.post('/login', function(req, res) {
  const username=req.body.username;
  const password=req.body.password;

  const mockUsername="krish";
  const mockPassword="nan";

  if (username == mockUserName && password == mockPassword) {
    res.json({
             success: true,
             message: 'password and username match!',
             token: 'encrypted token' })
  } else {
      res.json({
               success: false,
               message: 'wrong username or password!',
      })
  }
})

app.listen(8000, function(){
  console.log("server is running")
})
