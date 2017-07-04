// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('595af86f3f9694b727efe7bf')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result)
  //   })
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('595aee442befa6156c29e32d')
  }, {
    $set: {
      name: 'Marco'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })
});




  // db.close();
