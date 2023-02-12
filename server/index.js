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
  host: internalUrl,
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

app.get("/ticket/get", (req, res) => {
  const sqlQuery =
    "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date from ticket_pool as tp, ticket tk, status st, category ct, priority pt where tp.ticket_id=tk.ticket_id AND tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ticket/get/open", (req, res) => {
  const sqlQuery =
    "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date from ticket_pool as tp, ticket tk, status st, category ct, priority pt where tp.ticket_id=tk.ticket_id AND tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id and st.status_name='open'";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ticket/get/progress", (req, res) => {
  const sqlQuery =
    "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date from ticket_pool as tp, ticket tk, status st, category ct, priority pt where tp.ticket_id=tk.ticket_id AND tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id and st.status_name='in progress'";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ticket/get/solved", (req, res) => {
  const sqlQuery =
    "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date from ticket_pool as tp, ticket tk, status st, category ct, priority pt where tp.ticket_id=tk.ticket_id AND tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id and st.status_name='solved'";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ticket/get/closed", (req, res) => {
  const sqlQuery =
    "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date from ticket_pool as tp, ticket tk, status st, category ct, priority pt where tp.ticket_id=tk.ticket_id AND tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id and st.status_name='closed'";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ticket/get/pending", (req, res) => {
  const sqlQuery =
    "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date from ticket_pool as tp, ticket tk, status st, category ct, priority pt where tp.ticket_id=tk.ticket_id AND tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id and st.status_name='pending'";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ticket/categories", (req, res) => {
  const sqlQuery = "SELECT category_name FROM category;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
