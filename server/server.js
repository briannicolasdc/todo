
require("dotenv").config();

const connectDB = require("./config/db");
const cors = require("cors");
let express = require("express");
const todo = require("./routers/todo");
connectDB();
let app = express();
app.use(cors());

app.get("/", function(req, res) {
    res.send("server on")
});

app.use('/api/todo', todo);

const port = app.listen(5000);