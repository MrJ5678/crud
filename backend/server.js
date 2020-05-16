/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 20:16:03
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-15 21:35:48
 * @Description: file content
 */ 
const express = require('express')
const mongodb = require('mongodb')

const app = express();
const dbUrl = "mongodb://localhost/crud";

mongodb.MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db('crud');

  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games });
    });
  });

  app.listen(8080, () => console.log('Server is running on localhost:8080'));
});