const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://root:root@completecoding.u1asz.mongodb.net/?retryWrites=true&w=majority&appName=CompleteCoding";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
  .then(client => {
    callback();
    _db = client.db('airbnb');
  }).catch(err => {
    console.log('Error while connecting to Mongo: ', err);
  });
}

const getDB = () => {
  if (!_db) {
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;