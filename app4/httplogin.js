var http = require("http");
var fs = require("fs");
var querystring = require("querystring");

var server = http.createServer(receiveRequest);
server.listen(7070, startup);
function startup() {
    console.log("server started at port 7070");
}

function receiveRequest(req,res) {
    if(req.url == "/") {
        fs.readFile("login.html","utf8", function(error,data) {
            if(error)
            console.log(error);
            else
            res.write(data);
            res.end();
        });
    }
    else if(req.url == "/login" && req.method == "POST") {
        req.on("data", function(query) {
            console.log(query.toString());
            var q = querystring.parse(query.toString());
            console.log(q);
            if(q.t1 == "himanshu" && q.t2 == "sharma")
            res.write("Successfull Login");
            else
            res.write("Invalid Login");
            res.end();        
        });       
    }
    else {
res.write("No page here");
res.end();
    }
}
