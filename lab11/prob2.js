const http = require('http'), fs = require('fs'), path = require('path');
const server = http.createServer();

server.on('request', function (request, response) {
    if (request.url === '/file') {
        fs.readFile(path.join(__dirname, 'assets/2.jpg'), function (err, data) {
            if (!err) {
                response.writeHead(200, {'Content-type': 'image/jpg'});
                response.end(data);
            } else {
                res.writeHead(400, {'Content-type': 'text/html'})
                console.log(err);
                res.end("Error!");
            }
        })
    } else if (request.url === '/stream') {
        const stream = fs.createReadStream(path.join(__dirname, 'assets/2.jpg'), {highWaterMark: 8 * 1024});
        stream.pipe(response);
    } else if (request.url === '/fileSync') {
        const file = fs.readFileSync(path.join(__dirname, 'assets/2.jpg'));
        response.end(file);
    }
});
server.listen(3000);