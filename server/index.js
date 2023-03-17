require("dotenv").config();

const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const port = 8001;
const router = require("./Routes/Router")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("xxxxxxxxxxxx");
})
app.use("/pic", express.static("./pic"))
app.use(router)
app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})
