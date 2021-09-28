const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/smartisan', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch(() => {
    console.log('数据库连接失败')
  })

const userSchame = new mongoose.Schema({
  name: String,
  password: String,
})
const User = mongoose.model('User', userSchame)

// User.create({ name: '1', password: '1' })
// User.create({ name: '2', password: '2' })
// User.create({ name: '3', password: '3' })
// User.create({ name: '4', password: '4' })
// User.create({ name: '5', password: '5' })
// User.create({ name: '6', password: '6' })
// User.create({ name: '7', password: '7' })
// User.create({ name: '8', password: '8' })

module.exports = User
