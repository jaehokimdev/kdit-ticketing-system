const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.PORT || 8000;

const externalUrl = "newdoldol.dynamic-dns.net";
const internalUrl = "192.168.0.18";

const db = mysql.createPool({
  host: externalUrl,
  user: "newdoldol",
  password: "Qlalfqjsgh!@12",
  database: "KDIT",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user/get", (req, res) => {
  const sqlQuery = "SELECT * FROM user;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
