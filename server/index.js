const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/", function (req, res) {
  console.log("進入家裡蹲首頁");  
});

app.get("/about", function (req, res) {
  console.log("歡迎來到家裡蹲的網站");
});





app.listen(8080, () => {
  console.log("Server running on port 8080 . ");
});