const express = require("express")
const server = express();

server.listen(3008,() => console.log("listening on 3008"))
module.exports = server