const imgDir = './message/images/'
const fs = require('fs')

const imageList = []

fs.readdirSync(imgDir).forEach(file => {
  imageList.push({
      filename: file,
      path: `${imgDir}${file}`,
      cid: file
  })
})

module.exports = imageList
