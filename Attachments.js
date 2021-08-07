const imgDir = './message/images/'
const fs = require('fs')

const imageList = []

fs.readdirSync(imgDir).forEach(file => {

  const base64 = Buffer
    .from(fs.readFileSync(`${imgDir}${file}`))
    .toString('base64')

  imageList.push({
      filename: file,
      path: `${imgDir}${file}`,
      base64
  })
})

module.exports = imageList
