let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/users', (req, res) => {
  var user = new User({
    name: req.body.name
  });

user.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
    console.log('Started...');
})

module.exports = {app};