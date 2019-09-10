let http = require("http");

function trataRequisicao(req, res) {
    res.writeHead(200, 
        {"content-type": "text/html"}
    )
    res.write("<h1>Hello World!</h1>");
    res.end();
}
let server = http.createServer(trataRequisicao);
server.listen(8088);

console.log("Servidor na porta http://localhost:8088");