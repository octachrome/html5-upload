var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.post('/upload', function (req, res) {
    res.setHeader('Content-type', 'text/plain');

    req.on('data', function (data) {
        res.write(data);
    });
    req.on('end', function () {
        res.end();
    })
});

app.listen(8080);
