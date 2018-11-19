// mongod.exe --dbpath \Users\1\Documents\mongo-data
//C:\Program Files\MongoDB\Server\4.0\bin
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'Andrii',
        age: 19,
        location: 'Lviv'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    })

    client.close();
});