## bulkmailer
Send html email with embedded images. Based on [nodemailer](https://nodemailer.com/).

An email message in html format lives inside a directory structure like this:
```
message/
├── images
│   └── dronetest.png
└── index.html
```

The index.html content in this example, which is included, looks like this:

```
<p><img style="width:1168px;height:687px" src="images/dronetest.png"></p>
```

Any image src attribute value inside the html will get replaced automatically by its respective attachment content ID.
This means you can freely create an index.html with images, aslong as the images live in the images directory,
and their src attribute is the relative image path, something like "images/dronetest.png".

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
* Adjust the "from", "subject" and "text" fields inside index.js

### Run

```
node index.js
```

I use this bulk mailer "in production" to send advertising emails from drone-existince.com.

WARNING: This thing is very simple but yet very effective. Use with very much care. Test carefuly before usage.

WARNING: To make sure you'll make it through spam filters, you _have to_ run this from a server that sends email from the same domain that is used in the "from" field, or a server that's allowed to send email for the domain you're using in the "from" field ([SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework)). 
