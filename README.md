### bulkmailer
Bulk Mailer, html with embedded images

An email message in html format lives like this:
```
message/
├── images
│   └── dronetest.png
└── index.html
```

The index.html in this example looks like this:

```
<p><img style="width:1168px;height:687px" src="cid:dronetest.png"></p>
```

The email list goes into a file named EmailList.json.

The json file should like this:

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

Run the bulk mailer:

```
node index.js
```
