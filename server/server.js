const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/style", function(req, res){
    res.sendFile(path.join(__dirname, "../public/style.css"))
})

const port = process.env.PORT || 4005;


app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});