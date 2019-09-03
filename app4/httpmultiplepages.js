var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
console.log("request received");

var filename="index.html";
if(request.url == "/home")
filename = "home.html";
else if(request.url == "/about")
filename = "about.html";
else if(request.url == "/contact")
filename = "contact.html";

fs.readFile(filename,"utf8", function(error, data) {
    if(error) {
        response.writeHead(500);
        response.write("unable to read file");
    }
    else {
        response.setHeader("content-type","text/html");
        response.write(data);
    }
    response.end();
});
});

server.listen(7070, function() {
    console.log("Lisener started at 7070");
});

// 1024 to 65535 port number range

