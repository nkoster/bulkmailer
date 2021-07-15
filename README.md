## bulkmailer

<img src="https://raw.githubusercontent.com/nkoster/bulkmailer/master/message/images/bukhanka.png" alt="UAZ Bukhanka" width="200"/>

Send html email with embedded images. Based on [nodemailer](https://nodemailer.com/), which is taking care of
building a message, with images embedded, by formatting the mail with content IDs and attachments.

You can read more about this way (and other ways) of sending out email with images here: https://mailtrap.io/blog/embedding-images-in-html-email-have-the-rules-changed/

An email message in html format with embedded images will open without warnings about blocked remote content in most email clients.
That's a big advantage because it improves a recipients user experience and trust.

The message in html format lives inside a directory structure like this:

```
message/
├── images
│   └── bukhanka.png
└── index.html
```

An image tag inside index.html, as in the included example, looks like this:

```
<body>
  <div>
    <img src="images/bukhanka.png">
  </div>
</body>
```

Bulkmailer will automatically replace any image src attribute value inside the html by its respective attachment content ID.
This means you can freely create an index.html with images, aslong as the images live in the images directory,
and their src attribute is the relative image path, something like "images/bukhanka.png".

### Email List

The email list goes into a file named "EmailList.json".

The json file should look like this:

```
[
    {
        "name": "John",
        "email": "john@gmail.com"
    },
    {
        "name": "Jane",
        "email": "jane@outlook.com"
    }
]
```

### Install

I am assuming that you're on a linux host with a local mailer like postfix installed.

```
git clone https://github.com/nkoster/bulkmailer
cd bulkmailer
npm i
```
Next...

* Make sure your EmailList.json file is in place
* Adjust the message folder content to your needs
* Adjust the "from", "subject" and "text" fields inside index.js to your needs

### Run

```
node bulkmailer.js
```

I use this bulk mailer "in production" to send advertising emails for [drone-existence.com](https://drone-existence.com).

WARNING: This thing is very simple but yet very effective. Use with very much care. Test carefuly before usage.

WARNING: To make sure you'll make it through spam filters, you _have to_ run this from a server that sends email from the same domain that is used in the "from" field (inside bulkmailer.js), or a server that's allowed to send email for the domain you're using in the "from" field ([SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework)).

### More Help

In case you need help sending out a bunch of nicely formatted bulk email for some campaign, let me know.
Perhaps we can work something out.

