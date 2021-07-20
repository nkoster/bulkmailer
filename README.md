# bulkmailer

<img src="https://raw.githubusercontent.com/nkoster/bulkmailer/master/message/images/bukhanka.png" alt="UAZ Bukhanka" width="200"/>

Send a message in html format with embedded images to a list of receipients.

Based on [nodemailer](https://nodemailer.com/), which is taking care of
building a message with the images embedded, by formatting the message with content IDs and attachments.

You can read more about this way (and other ways) of sending out email with images here: https://mailtrap.io/blog/embedding-images-in-html-email-have-the-rules-changed/

An email message in html format with embedded images will open without warnings about blocked remote content in most email clients.
That's a big advantage because it improves a recipients user experience and trust.

### Message Layout

The message in html format lives inside a directory structure like this:

```
./message/
  ├── images
  │   └── bukhanka.png
  └── index.html
```

An image tag inside index.html, as in the included example, looks like this:

```html
<body>
  <div>
    <img src="images/bukhanka.png">
  </div>
</body>
```

Bulkmailer will automatically replace any image **src** value inside the html by its respective attachment content ID.

This means you can freely create an index.html with images, aslong as the images live in the images directory,
and their src value contains the relative path, like **images/bukhanka.png** in the example.

### Install

I am assuming that you're on a linux host, installed with nodejs and a local mailer like [postfix](https://mailtrap.io/blog/postfix-sendmail-exim/).

Bulkmailer will be configured to deliver mail at localhost port 25 when you configure it like in the configuration example that's mentioned below.
Consult the nodemailer [documentation](https://nodemailer.com/smtp/) if you want to change that to something else.

```
git clone https://github.com/nkoster/bulkmailer
cd bulkmailer
npm i
```

### Email List

The email list goes into a file named **./EmailList.json**

The json file should be structured like this:

```javascript
[
    { "name": "John", "email": "john@gmail.com" },
    { "name": "Jane", "email": "jane@outlook.com" }
]
```

You may have more properties in an object, but not less.

### Configuration

Create a file named "**./Config.json**" and make it look like this:

```json
{
    "configTransporter": {
        "port": 25,
        "host": "localhost",
        "tls": {
          "rejectUnauthorized": false
        }
    },
    "configHeader": {
        "from": "contact@example.org",
        "subject": "UAZ Bukhanka",
        "text": "UAZ Bukhanka"
    }
}
```

Next, make sure your **./EmailList.json** file is in place.

Last but not least, adjust the ./message/ folder content to your needs. (index.html and images)

### Run

```
node bulkmailer.js
```

I use this bulk mailer "in production" to send advertising emails for [drone-existence.com](https://drone-existence.com).

**WARNING**: test carefuly with a small email list before applying to a huge list.

**WARNING**: to make sure you'll make it through spam filters, you _have to_ run this from a server that sends email from the same domain that is used in the "from" field (inside bulkmailer.js), or a server that's allowed to send email for the domain you're using in the "from" field ([SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework)).

### More Help

In case you need more help or advice for sending out a bunch of nicely formatted bulk email, let me know.
Perhaps we can work something out. Send a message to niels at w3b dot net.

Also, if you find errors, please let me know. Or make a pull request for your fix. Thanks!
