/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 20:16:03
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-17 17:43:32
 * @Description: file content
 */ 
const express = require('express')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
const dbUrl = "mongodb://localhost/crud";
const validate = (data) => {
  let errors = {}

  if(data.title === '') errors.title = "Can't be empty"
  if(data.cover === '') errors.cover = "Can't be empty"

  const isValid = Object.keys(errors).length === 0

  return { errors, isValid }
}

mongodb.MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db('crud');

  // 查寻请求路由
  app.get('/api/games', (req, res) => {
    setTimeout(() => {
      db.collection('games').find({}).toArray((err, games) => {
        res.json({ games });
      });
    }, 2000);
  });

  // 创建请求路由
  app.post('/api/games', (req, res) => {
    // 验证数据
    // console.log(req.body)
    const { errors, isValid } = validate(req.body)

    if(isValid) {
      const { title, cover } = req.body
      db.collection('games').insertOne({ title, cover }, (err, result) => {
        if(err) {
          res.status(500).json({ errors: { global: "Something went wrong" }})
        } else {
          res.json({ game: result.ops[0] })
        }
      })
    } else {
      res.status(400).json({ errors })
    }
  })

  // 查询单个id请求路由
  app.get('/api/games/:_id', (req, res) => {
    db.collection('games').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, game) => {
      res.json({ game })
    })
  })

  // 更改单个id对应内容请求路由
  app.put(`/api/games/:_id`, (req, res) => {
    const { errors, isValid } = validate(req.body) 
    if(isValid) {
      const { title, cover } = req.body
      db.collection('games').findOneAndUpdate(
        { _id: new mongodb.ObjectId(req.params._id)},
        { $set: { title, cover } },
        { returnOriginal: false },
        (err, result) => {
          if(err) { res.status(500).json({ errors: { global: err } }); return }
          res.json({ game: result.value })
        }
      )
    } else {
      res.status(400).json({ errors })
    }
  })

  // 处理删除某个id内容请求
  app.delete('/api/games/:_id', (req, res) => {
    db.collection('games').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, game) => {
      if(err) { res.status(500).json({ errors: { global: err } }); return }
      
      res.json({})
    })
  })

  // 处理错误请求(此中间件要写在下面, 注意位置)
  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later than when we implement it"
      }
    })
  })

  app.listen(8080, () => console.log('Server is running on localhost:8080'));
});