const http = require("http");
//const data = require("./utils/data");
const { getCharById } = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (url === "/hola") {
      res.writeHead(200, "Content-type: text/plain");
      res.end("Hola");
    } else if (url.includes("rickandmorty/character")) {
      const urlParts = url.trim().split("/");
      const id = urlParts[urlParts.length - 1];
      getCharById(res, id);
    }
  })
  .listen(3001, "localhost");
