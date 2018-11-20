let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp'); 

module.exports = {mongoose};

/*
let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/users', (req, res) => {
    let user = new User({
        text: req.body.text
    });
});

user.save().then((doc) => {
    res.send(doc);
}, (err) => {
    res.status(400).send(e);
});

app.listen(3000, () => {
    console.log('Started...');
})

*/