### bulkmailer
Send html with embedded images.

An email message in html format lives like this:
```
message/
├── images
│   └── dronetest.png
└── index.html
```

The index.html content in this example, which is included, looks like this:

```
<p><img style="width:1168px;height:687px" src="cid:dronetest.png"></p>
```

The email list goes into a file named EmailList.json.

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

Now, get your EmailList.json file in place, and adjust the message folder content to your needs.

### Run

```
node index.js
```

WARNING: This thing is very simple but yet very effective. Use with very much care. Test carefuly before usage.

WARNING: To make sure you'll make it through spam filters, you _have to_ run this from a server that sends email from the same domain that is used in the "from" field.
