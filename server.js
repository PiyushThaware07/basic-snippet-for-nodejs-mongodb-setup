const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express()
const dbConnection = require("./mongodb");

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("", (req, res) => res.send("Server Running..."));
app.use("/api/v1", require("./routes"));


const port = 8000;
app.listen(port, async () => {
    console.log(`~> Server Running at http://localhost:${port}`);
    await dbConnection();
})