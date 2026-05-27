let http = require("http");
let fs = require('fs');
let express = require('express');
const app = express();
app.use(express.static('public'));

function header(res) {
    res.write("<a href='/'>home</a>");
    res.write("<br/><a href='/about'>about</a>");
    res.write("<br/><a href='/services'>services</a>");
    res.write("<br/><a href='/gallery'>gallery</a>");
    res.write("<br/><a href='/products'>products</a>");
    res.write("<br/>")
}

app.get("/", (req, res) => {
    fs.readFile('./index.html', (error, data) => {
        console.log(data);
        console.log(error);
        if (error) {
            res.writeHead(404);
            res.write("file not found.");
        }
        else {
            res.writeHead(200, {

            });
            res.write(data);
        }
        res.end()
    });
});

app.listen(8008);
// app.get("/about", (req, res) => {
//     res.writeHead(200, {
//         "content-type": "text/html"
//     });
//     res.write("<body>");
//     header(res);
//     res.write("About page.");
//     res.end();
// });
// app.get("/services", (req, res) => {
//     res.writeHead(200, {
//         "content-type": "text/html"
//     });
//     header(res);
//     res.write("Services page.");
//     res.end();
// });
// app.get("/gallery", (req, res) => {
//     res.writeHead(200, {
//         "content-type": "text/html"
//     });
//     header(res);
//     res.write("Gallery page.");
//     res.end();
// })
// app.get("/products", (req, res) => {
//     res.writeHead(200, {
//         "content-type": "text/html"
//     });
//     header(res);
//     res.write("Products page.");
//     res.end();
// })

// http.createServer((req, res) => {
//     if (req.url == "/") {
//         fs.readFile('../../website_cloning_exercise/index.html', (error, data) => {
//             console.log(data);
//             console.log(error);
//             if (error) {
//                 res.writeHead(404);
//                 res.write("file not found.");
//             }
//             else {
//                 res.writeHead(200, {
//                     "content-type": "text/html"
//                 });
//                 res.write(data);
//             }
//             res.end()
//         });
//     } else if (req.url == "/about.html") {
//         fs.readFile('../../website_cloning_exercise/about.html', (error, data) => {
//             console.log(data);
//             console.log(error);
//             if (error) {
//                 res.writeHead(404);
//                 res.write("file not found.");
//             }
//             else {
//                 res.writeHead(200, {
//                     "content-type": "text/html"
//                 });
//                 res.write(data);
//             }
//             res.end();
//         });
//     } else {
//         res.writeHead(404);
//         res.write("file not found.");
//         res.end()
//     }

//     console.log("Running");
// })
//     .listen(8008);
