
import http from 'http';

http.createServer((req, res)=>{
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('Hello World');
}).listen(1337, '127.0.0.1');

console.log("Babel is working!");
