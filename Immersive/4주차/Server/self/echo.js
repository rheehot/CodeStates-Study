const http = require("http");

const server = http.createServer((request, response) => {
  request.on("error", (err) => {
    console.log(err);
    response.statusCode = 400;
    response.end();
  });

  response.on("error", (err) => {
    console.error(err);
  });
  if (request.method === "POST" && request.url === "/echo") {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(8080);
