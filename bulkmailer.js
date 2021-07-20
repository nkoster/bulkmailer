const nodemailer = require('nodemailer')
const fs = require('fs')

const EmailList = require('./EmailList.json')

let html = fs.readFileSync('./message/index.html', 'utf8')

const attachments = require('./Attachments')
attachments.forEach(img => 
    html = html.replace(`images/${img.filename}`, `cid:${img.filename}`))

const { configTransporter } = require('./Config.json')
const transporter = nodemailer.createTransport(configTransporter)

const { from, subject, text } = require('./Config.json').configHeader
EmailList.forEach(({name, email}) => {
    const message = {
        from, to: `${name}<${email}>`,
        subject, text, attachments, html
    }
    transporter.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log(name, email, info.messageId)
    })
})
