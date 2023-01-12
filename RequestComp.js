const http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('child1.js', 'utf8', (err, data) => {
        res.write(data)
        res.end();
        console.log(data)


    })

}).listen(8080)
