//Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
//Set our port to 3000
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'));

// //Create our server
// const server = http.createServer(handleRequest);

// function handleRequest(req, res){
//     //Use fs package to read our index.html file
// fs.readFile(__dirname + "/index.html", function(err, data){
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end(data);
//     });
// }

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  

// server.listen(PORT, function() {
//     console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     )
// });

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  