const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Chay yeu cau ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>Xin chao cac ban </h2>');
    res.write('<h3>Toi la Dinh Anh Tuan </h3>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Node.js Server is running on port: 3000');
})