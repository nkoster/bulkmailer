const nodemailer = require('nodemailer')
const fs = require('fs')

const EmailList = require('./EmailList.json')

let html = fs.readFileSync('./message/index.html', 'utf8')

const attachments = require('./Attachments')
attachments.forEach(img => 
    html = html.replace(`images/${img.filename}`, `data:image/png;base64,${img.base64}`))

const { configTransporter } = require('./Config.json')
const transporter = nodemailer.createTransport(configTransporter)

const { from, subject, text } = require('./Config.json').configHeader
EmailList.forEach(({name, email}) => {
    const message = {
        from, to: `${name}<${email}>`,
        subject, text, html
    }
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(email, err.message)
        console.log(name, email, info.messageId)
    })
})
