const http = require('http');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, {
                'content-type': 'text/html'
            })
            res.end("Welcome to the home page")
            break;
        case '/Manvir':
            res.writeHead(200, {
                'content-type': 'application/json'
            })
            res.end(JSON.stringify({
                'name': "Manvir",
                'course': "Node"
            }))
            break;
        default:
            res.writeHead(404, {
                'content-type': 'text/html'
            })
            res.end("404")
            break
    }
});


server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001');
});