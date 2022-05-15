const http= require('http');
const sever= http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hola mundo');
    res.end();
},3000);


