//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');

//    db.collection('Users').deleteOne({name: 'Andrii'});
    db.collection('Users').deleteMany({name:'Andrii'}).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });

    client.close();
});