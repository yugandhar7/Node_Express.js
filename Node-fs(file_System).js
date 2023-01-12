// //this is used to append the code to exesting file //it wont replace the exesting code
const fs = require('fs');
fs.appendFile('child1.js', 'console.log("file is added by using  the appendFile function ")', function (err) {
    console.log('file is appended');
})
// //it is used to read the file // it means it display the code in the file
const fs = require('fs');
fs.readFile('child1.js', 'utf8', function (err, data) {
    console.log(data)
})
// // To write the  code in certain file
const fs = require('fs');
fs.writeFile('child2.js', 'function add(a,b){return a+b:}', function (err) {
    console.log("file created");
})
// // it is used to delete the file
const fs = require('fs');
fs.unlink('fff.js', function (err) {
    console.log("file deleted sucessfully");
})
//above all programs are work on terminal ;
//For working on webpage we need to perform the same operations on server
const http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('../fs/child.js', 'utf8', (err, data) => {//here we need to specify the path correctly  based on the folder
        res.write(data)
        res.end();

    })

}).listen(8080)
