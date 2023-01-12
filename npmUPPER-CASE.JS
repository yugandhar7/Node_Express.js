// this page reperesnts how to use particular module of npm 
let http = require('http');
let uc = require('upper-case')//it is one of the module
http.createServer((req, res) => {
    res.end(uc.upperCase('hellow world'))//it converts all the content into upper case
}).listen(8080);
