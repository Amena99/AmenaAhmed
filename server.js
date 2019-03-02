//Dependencies
const http = require("http");
const fs = require("fs");

//Set our port to 3000
const PORT = process.env.PORT || 3000;

//Create our server
const server = http.createServer(handleRequest);

function handleRequest(req, res){
    //Use fs package to read our index.html file
fs.readFile(__dirname + "/index.html", function(err, data){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(data);
    });
}

server.listen(PORT, function() {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    )
});
