const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/smartisan', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch(() => {
    console.log('数据库连接失败')
  })

const productionSchma = new mongoose.Schema({
  category: String,
  img: String,
  name: String,
  describe: String,
  price: String,
  ishot: {
    type: Number,
    default: 0,
  },
})

const Production = mongoose.model('Production', productionSchma)

// Production.create({ img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270', category: '蓝牙耳机', name: 'Smartisan 颈挂蓝牙耳机', describe: '"圈铁一体代表作"', price: '199.00' })
// Production.create({ img: 'https://resource.smartisan.com/resource/e991f946530a7cfab3d9670dd8b1371b.png?x-oss-process=image/resize,w_270', category: '蓝牙耳机', name: 'Smartisan 真无线TWS蓝牙耳机', describe: '智能配对 开盖即连', price: '99.00', ishot: 1 })
// Production.create({ img: 'https://resource.smartisan.com/resource/ddcd447c08be823270e0c2792df9c8e8.png?x-oss-process=image/resize,w_270', category: '蓝牙耳机', name: 'Smartisan 真无线蓝牙耳机 Pro', describe: '通话降噪 全新升级', price: '129.00' })
// Production.create({ img: 'https://resource.smartisan.com/resource/211d521553c8816ae1dc6fb5ecdcc99d.jpg?x-oss-process=image/resize,w_270', category: '蓝牙耳机', name: 'Smartisan 真无线蓝牙耳机 (抖音文创限量版)', describe: '抖音文创限量版', price: '299.00' })

// Production.create({ img: 'https://resource.smartisan.com/resource/4d9e7683b590cf4a6996d3b13136bcf8.png?x-oss-process=image/resize,w_270', category: '坚果 R2', name: '坚果 R2', describe: '是下一代手机，更是下一代电脑', price: '2,699.00', ishot: 1 })

// Production.create({ img: 'https://resource.smartisan.com/resource/4fc4edc5973be10c3d221c592e760063.png?x-oss-process=image/resize,w_270', category: 'TNT', name: 'Smartisan TNT go', describe: '欢迎使用下一代电脑', price: '1,499.00', ishot: 1 })
// Production.create({ img: 'https://resource.smartisan.com/resource/79c58355d2f5fd53988684b96d405f9b.png?x-oss-process=image/resize,w_270', category: 'TNT', name: 'Smartisan TNT 大满足套装', describe: '下一代手机，下一代电脑', price: '4,999.00' })
// Production.create({ img: 'https://resource.smartisan.com/resource/c9a55fe8b5bc506fec60659aa2dcebe9.png?x-oss-process=image/resize,w_270', category: 'TNT', name: 'Smartisan 智能手写笔', describe: '尽情挥洒创造力', price: '4,99.00' })

// Production.create({ img: 'https://resource.smartisan.com/resource/4ab831421eb5d06ba694983618bde12d.jpg?x-oss-process=image/resize,w_270', category: '坚果 R2 保护套', name: '坚果 R2 透明保护套', describe: 'TPU透明软胶材质,耐磨耐用', price: '29.00' })
// Production.create({ img: 'https://resource.smartisan.com/resource/4974b2bb24ae8607c55a73944662f1f7.jpg?x-oss-process=image/resize,w_270', category: '坚果 R2 保护套', name: '坚果 R2 足迹系列保护套', describe: '7种主题随机发货', price: '59.00' })
// Production.create({ img: 'https://resource.smartisan.com/resource/992672ec0bd109c5915ca47ffd548fea.jpg?x-oss-process=image/resize,w_270', category: '坚果 R2 保护套', name: '坚果 R2 足迹系列保护套 圆珠笔的改进者出生', describe: '为了那些改变人类足迹的进程', price: '59.00' })
// Production.create({ img: 'https://resource.smartisan.com/resource/4c8b4485240d7ff1cd472030366093d4.jpg?x-oss-process=image/resize,w_270', category: '坚果 R2 保护套', name: '坚果 R2 足迹系列保护套 正电子的发现者出现', describe: '为了那些改变人类足迹的进程', price: '59.00' })
// Production.create({ img: 'https://resource.smartisan.com/resource/4a95e648a4ec570aebad08e501cbffba.jpg?x-oss-process=image/resize,w_270', category: '坚果 R2 保护套', name: '坚果 R2 足迹系列保护套 3M', describe: '为了那些改变人类足迹的进程', price: '59.00' })

module.exports = Production
