const cors = require('cors');
const express = require('express');
const connectDB = require('./db/config');
const user_model = require('./db/users');
const app = express();
const path = require('path')

const publicPath = path.join(__dirname, 'public');
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

app.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } catch (error) {
        console.error("Error serving index.html:", error.message);
        res.status(404).send("Error 404: File not found.");
    }
});

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

app.get("/show-users", async (req, res) => {
    try {
        const users = await user_model.find({}).lean();
        console.log(`Data successfully retrieved ${users.length} users from MongoDB`);
        let tableRows = "";
        users.forEach((user, index) => {
            tableRows += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${user.fName || ''}</td>
                    <td>${user.lName || ''}</td>
                    <td>${user.email || ''  }</td>
                </tr>
            `;
        });
        res.send(`
            <!DOCTYPE html>
            <html lang="en" data-bs-theme="light">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>User Directory | Hoster</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
                <style>
                    body { font-family: 'Inter', sans-serif; }
                </style>
            </head>
            <body class="bg-light py-5">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h1 class="h3 fw-bold m-0">Registered Users</h1>
                            <p class="text-muted m-0">Live directory pulled straight from MongoDB</p>
                        </div>
                        <a href="/" class="btn btn-outline-primary">Back Home</a>
                    </div>

                    <div class="card shadow-sm border-0">
                        <div class="table-responsive">
                            <table class="table table-hover align-middle m-0">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col" style="width: 10%">#</th>
                                        <th scope="col" style="width: 30%">First Name</th>
                                        <th scope="col" style="width: 30%">Last Name</th>
                                        <th scope="col" style="width: 30%">Email Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${tableRows || '<tr><td colspan="4" class="text-center text-muted py-4">No users found in the database.</td></tr>'}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `);

    } catch (error) {
        console.error("Failed to retrieve data:", error.message);
        res.status(500).send("Error retrieving data from the database.");
    }
});

app.listen(8008, () => {
    console.log("Server started.");
});

module.exports = app;