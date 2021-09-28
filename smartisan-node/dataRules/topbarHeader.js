const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/smartisan', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
  console.log('数据库连接成功');
  }).catch(() => {
  console.log('数据库连接失败');
})

const topbarHeaderSchema = new mongoose.Schema({
  title: String,
  position:Number
})

const Topbar = mongoose.model('Topbar', topbarHeaderSchema)

// Topbar.create({title:'在线商城',position:1})
// Topbar.create({title:'坚果R2',position:2})
// Topbar.create({title:'Smartisan TNT go',position:3})
// Topbar.create({title:'坚果TNT工作站',position:4})
// Topbar.create({title:'Smartisan OS',position:5})
// Topbar.create({title:'欢喜云',position:6})
// Topbar.create({title:'论坛',position:7})
// Topbar.create({title:'开发者支持',position:8})
// Topbar.create({title:'荣誉与奖项',position:9})

module.exports = Topbar