
const express = require('express');
const app = express();
app.listen(1437, function (req, res) {
    console.log('server started on port number 1437');

})
app.get('/', function (req, res) {
    res.send("hellow server");
})

app.get('/ug/20', function (req, res) {
    res.send("hellow ug")
})
app.get('/ug/:id', function (req, res) {
    const id = req.params.id;
    res.send("this is your" + id);
})
