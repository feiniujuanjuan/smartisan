const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/smartisan', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
  console.log('数据库连接成功');
  }).catch(() => {
  console.log('数据库连接失败');
})

const mainbarHeaderSchema = new mongoose.Schema({
  title: String,
  position: Number
})

const Mainbar = mongoose.model('Mainbar', mainbarHeaderSchema)

// Mainbar.create({title:'首页',position:1})
// Mainbar.create({title:'坚果手机',position:2})
// Mainbar.create({title:'TNT',position:3})
// Mainbar.create({title:'官方自营',position:4})
// Mainbar.create({title:'服务',position:5})

module.exports = Mainbar