const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/smartisan', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('数据库连接成功');
  }).catch(() => {
  console.log('数据库连接失败');
})

const bannerSchema = new mongoose.Schema({
  img: String,
  position: Number
})

const Banner = mongoose.model('Banner', bannerSchema)

// Banner.create({img:'https://resource.smartisan.com/resource/fa808c10081b9fd3040bb7bfd12b891c.jpg?x-oss-process=image/resize,w_1525/format,webp/quality,Q_95',position:1})
// Banner.create({img:'https://resource.smartisan.com/resource/1f0f2209a141202179277019dd1eeec5.jpg?x-oss-process=image/resize,w_1525/format,webp/quality,Q_95',position:2})
// Banner.create({img:'https://resource.smartisan.com/resource/1c6c6b970fc8f773a6e37c25dd7d5789.png?x-oss-process=image/resize,w_1525/format,webp/quality,Q_95',position:3})

module.exports = Banner