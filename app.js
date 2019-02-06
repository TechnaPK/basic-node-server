var express = require('express');
var server = express()
server.get('/', (req, res)=>{   res.send("  Hello everyone! ") } )
server.listen(8080, () => { console.log("Server successfully started.") } )
