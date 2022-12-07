const HTTP = require('http');
const PORT = 3000;

HTTP.createServer( function ( request, response) {
    console.log("New request");
    console.log(request.url);

    response.write("HI! I'm using node.js http")

    return response.end();
}).listen(PORT);