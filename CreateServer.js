var app = require('http');
app.createServer(function (req, res) {
    res.write("hellow node  ")
    res.end();
}).listen(7777, () => {
    console.log("server running on port no 7777")
})

