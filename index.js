const nodemailer = require('nodemailer')
const fs = require('fs')

const EmailList = require('./EmailList.json')

let html = fs.readFileSync('./message/index.html', 'utf8')

const attachments = require('./Attachments')

attachments.forEach(img => html = html.replace(`images/${img.filename}`, `cid:${img.filename}`))

const transporter = nodemailer.createTransport({
    port: 25,
    host: 'localhost',
    tls: {
      rejectUnauthorized: false
    }
})

EmailList.forEach(({name, email}) => {
    let message = {
        from: 'noreply@drone-existence.com',
        to: `${name}<${email}>`,
        subject: 'UAZ Bukhanka',
        text: 'UAZ Bukhanka',
        attachments,
        html
    }
    transporter.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log(name, email, info.messageId)
    })
})
