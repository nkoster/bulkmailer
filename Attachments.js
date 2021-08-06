const imgDir = './message/images/'
const fs = require('fs')

const imageList = []

const getBase64 = image =>
  Buffer.from(fs.readFileSync(image)).toString('base64')

fs.readdirSync(imgDir).forEach(file => {
  const base64 = getBase64(`${imgDir}${file}`)

  imageList.push({
      filename: file,
      path: `${imgDir}${file}`,
      base64
  })
})

module.exports = imageList
