var http = require("http");
http.createServer((req, res)=>{
    res.writeHead(200, {
       "content-type": "text/html"
    })
    res.write("<body>Test")
    res.end()
    console.log("Running")    
})
.listen(8080);
