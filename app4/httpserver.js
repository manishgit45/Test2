var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response) {
console.log("request received");
fs.readFile("index.html","utf8", function(error, data) {
    if(error) {
        response.writeHead(500);
        response.write("unable to read file");
        response.end();
    }
    else {
        response.setHeader("content-type","text/html");
		response.setHeader("Access-Control-Allow-Origin", "*");
        response.write(data);
        response.end();
    }
});
});

server.listen(7070, function() {
    console.log("Lisener started at 7070");
});

// 1024 to 65535 port number range

