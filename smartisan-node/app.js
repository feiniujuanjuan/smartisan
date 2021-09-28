const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const topbar = require('./dataRules/topbarHeader')
const mainbar = require('./dataRules/mainbarHeader')
const banner = require('./dataRules/banner')
const production = require('./dataRules/production')
const user = require('./dataRules/user')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/home', (req, res) => {
  let data = {}
  topbar
    .find()
    .sort('position')
    .then((result) => {
      data.topbar = result
      return mainbar.find().sort('position')
    })
    .then((result) => {
      data.mainbar = result
      return banner.find().sort('position')
    })
    .then((result) => {
      data.banner = result
      return production.find({ ishot: 1 })
    })
    .then((result) => {
      data.hot = result
      return production.find()
    })
    .then((result) => {
      data.product = result
      return production.find().select('category')
    })
    .then((result) => {
      let ct = []
      result.forEach((item) => {
        if (ct.indexOf(item.category) === -1) {
          ct.push(item.category)
        }
      })
      data.category = ct
      res.send(data)
    })
})

app.get('/category', (req, res) => {
  production.find({ category: req.query.s }).then((result) => {
    res.send(result)
  })
})
app.get('/categoryByName', (req, res) => {
  production
    .find({ name: req.query.name })
    .select('category')
    .then((result) => {
      res.send(result[0].category)
    })
})

app.get('/search', (req, res) => {
  production
    .find()
    .select('name')
    .then((result) => {
      let name = []
      result.forEach((item) => {
        console.log(item)
        if (item.name.indexOf(req.query.s) != -1) {
          name.push(item.name)
        }
      })
      console.log(name)
      res.send(name)
    })
})

app.get('/product/select', (req, res) => {
  production.find().then((result) => {
    res.send(result)
  })
})

app.post('/product/add', (req, res) => {
  production.create(req.body)
})

app.delete('/product/delete', (req, res) => {
  production
    .findOneAndDelete({
      _id: req.body.id,
    })
    .then((result) => {})
})

app.put('/product/update', (req, res) => {
  production
    .updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: {
          category: req.body.category,
          img: req.body.img,
          name: req.body.name,
          describe: req.body.describe,
          price: req.body.price,
          ishot: req.body.ishot,
        },
      }
    )
    .then((result) => {})
})

app.get('/user/select', (req, res) => {
  user.find().then((result) => {
    res.send(result)
  })
})

app.get('/user/selectByName', (req, res) => {
  user.findOne({ name: req.query.name }).then((result) => {
    res.send(result)
  })
})

app.post('/user/add', (req, res) => {
  user.create(req.body)
})

app.put('/user/update', (req, res) => {
  user
    .findOneAndUpdate(
      { _id: req.body._id },
      {
        name: req.body.name,
        password: req.body.password,
      }
    )
    .then((result) => {})
})

app.delete('/user/delete', (req, res) => {
  console.log(req.body)
  user.findOneAndDelete({ _id: req.body.id }).then((result) => {
    console.log(result)
  })
})

app.listen(3000, () => {
  console.log('serve runing')
})
