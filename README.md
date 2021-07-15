## bulkmailer

Send html email with embedded images. Based on [nodemailer](https://nodemailer.com/).

An email message in html format with embedded images will open without warnings about blocked images in most email clients.
That's an advantage because it improves a recipients experience.

An email message in html format lives inside a directory structure like this:
```
message/
├── images
│   └── bukhanka.png
└── index.html
```

An image tag inside index.html in the included example, looks like this:

```
<body>
  <div>
    <img src="images/bukhanka.png">
  </div>
</body>
```

Any image src attribute value inside the html will get replaced automatically by its respective attachment content ID.
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

WARNING: To make sure you'll make it through spam filters, you _have to_ run this from a server that sends email from the same domain that is used in the "from" field, or a server that's allowed to send email for the domain you're using in the "from" field ([SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework)).

### More Help

In case you need help sending out a bunch of nicely formatted bulk email for some campaign, let me know. We'll work something out.

