# bulkmailer
Bulk Mailer, html with embedded images

Message:

```
message/
├── images
│   └── dronetest.png
└── index.html
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
