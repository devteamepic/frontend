var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('Hi')
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('App is running at 8080')
})
