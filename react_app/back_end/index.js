const cors = require('cors');
const express = require('express');
const axios = require('axios');
const connectDB = require('./db/config');

const user_model = require('./db/users');
const { join } = require('path');
const app = express();
const path = require('path')

const publicPath = join(__dirname, '..', 'front_end', 'dist');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

function header(res) {
    res.write("<a href='/'>home</a>");
    res.write("<br/><a href='/about'>about</a>");
    res.write("<br/><a href='/services'>services</a>");
    res.write("<br/><a href='/gallery'>gallery</a>");
    res.write("<br/><a href='/products'>products</a>");
    res.write("<br/>");
}

app.post("/submit-register", async (req, res) => {
    try {
        const user = new user_model(req.body);
        const result = await user.save();
        console.log("Data successfully submitted to MongoDB:", result);
        res.redirect('/login.html'); 
    } catch (error) {
        console.error("Failed to save user:", error.message);
        res.status(500).send("Error saving data to the database.");
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(8008, () => {
        console.log("🚀 Local server started seamlessly on http://localhost:8008");
    });
}

module.exports = app;

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
