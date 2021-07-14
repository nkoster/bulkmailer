const testFolder = './message/images/'
const fs = require('fs')

const imageList = []

fs.readdirSync(testFolder).forEach(file => {
  imageList.push({
      filename: file,
      path: `./message/images/${file}`,
      cid: file
  })
})

module.exports = imageList
