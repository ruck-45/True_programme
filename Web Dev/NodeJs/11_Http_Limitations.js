const http = require("http");
const { readFile } = require("fs").promises;

const server = http.createServer((req, res) => {
  const url = req.url;

  //   Home
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html", secret: "1223" }); // adding custom status code and header
    res.write("<h1>Home Page</h1>");
    res.end();
  }

  //   About
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html", secret: "1223" });
    res.write("<h1>About Page</h1>");
    res.end();
  }

  //   Secret
  else if (url === "/1223") {
    readFile("./test/index.html")
      .then((data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      })
      .catch((err) => {
        res.writeHead(400, { "content-type": "text/plain" });
        res.write("Content Not Found");
        console.log(err);
        res.end();
      });
  }

  // Style
  else if (url === "/style.css") { // adding paths for each required resource by the html
    readFile("./static/style.css")
      .then((data) => {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(data);
        res.end();
      })
      .catch((err) => {
        res.writeHead(400, { "content-type": "text/plain" });
        res.write("Content Not Found");
        console.log(err);
        res.end();
      });
  }

  // Script
  else if (url === "/script.js") {
    readFile("./static/script.js")
      .then((data) => {
        res.writeHead(200, { "content-type": "text/js" });
        res.write(data);
        res.end();
      })
      .catch((err) => {
        res.writeHead(400, { "content-type": "text/plain" });
        res.write("Content Not Found");
        console.log(err);
        res.end();
      });
  }

  //   Not Found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Opps Page Not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000..");
});




// The limitation we observed here is we need to micromanage every thing in the server
// Starting from header to adding all request paths used by files 
// Express and other (Django, Spring) perform those task for us and make backend management easier