const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

const db = mysql.createPool({
  host: "132.145.101.115",
  user: "root",
  password: "Qlalfqjsgh!@12",
  database: "KDIT",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user/getAllUsers", (req, res) => {
  const sqlQuery = "SELECT * FROM user;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get("/user/getAllUserNames", (req, res) => {
  const sqlQuery =
    "select user_id, CONCAT(first_name,' ', last_name) as name from user where user.role_id=1;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get("/user/getAllAccounts", (req, res) => {
  const sqlQuery = "SELECT * FROM accounts;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get("/user/getuser", (req, res) => {
  const { email } = req.query;
  const sqlQuery =
    "SELECT us.user_id, us.first_name, us.last_name, us.email, us.password, rl.role_name FROM user as us, role rl WHERE us.role_id=rl.role_id AND us.email = ?;";
  db.query(sqlQuery, [email], (err, result) => {
    res.send(result);
  });
});

app.get("/user/getaccount", (req, res) => {
  const { email } = req.query;
  const sqlQuery =
    "SELECT ac.account_id, ac.client_id, at.acctype_name, ac.first_name, ac.last_name, ac.email, ac.password FROM accounts as ac, account_type at WHERE ac.acctype_id=at.acctype_id AND ac.email = ?;";
  db.query(sqlQuery, [email], (err, result) => {
    res.send(result);
  });
});

app.post("/ticket/newticket", (req, res) => {
  const { title, body, category, priority, creation_date, account_id } =
    req.body;
  const sqlQuery =
    "INSERT INTO ticket(title, body, category_id, priority_id, creation_date, account_id) VALUES (?,?,?,?,?,?);";
  db.query(
    sqlQuery,
    [title, body, category, priority, creation_date, account_id],
    (err, result1) => {
      let id = result1.insertId;
      const sqlQuery2 =
        "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date, tk.user_id, tk.account_id from ticket as tk, status st, category ct, priority pt where tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id AND tk.ticket_id = ?;";
      db.query(sqlQuery2, [id], (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  );
});

app.post("/ticket/addAgent", (req, res) => {
  const { user_id, ticket_id } = req.body;
  const sqlQuery = "update ticket set user_id=? where ticket_id=?;";
  db.query(sqlQuery, [user_id, ticket_id], (err, result) => {
    const sqlQuery2 =
      "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date, tk.user_id, tk.account_id from ticket as tk, status st, category ct, priority pt where tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id AND tk.ticket_id = ?;";
    db.query(sqlQuery2, [ticket_id], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
});

app.post("/ticket/updateStatus", (req, res) => {
  const { status_id, ticket_id } = req.body;
  console.log(status_id);
  const sqlQuery = "update ticket set status_id=? where ticket_id=?;";
  db.query(sqlQuery, [status_id, ticket_id], (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.post("/ticket/addCommentByUser", (req, res) => {
  const { comment_description, ticket_id, user_id, creation_date } = req.body;
  const sqlQuery =
    "INSERT INTO comments(user_id,ticket_id,comment_description,creation_date) VALUES (?,?,?,?);";
  db.query(
    sqlQuery,
    [user_id, ticket_id, comment_description, creation_date],
    (err, result1) => {
      let id = result1.insertId;
      const sqlQuery2 =
        "select cm.comment_id, cm.comment_description, cm.creation_date,  cm.user_id, cm.account_id, CONCAT(acc.last_name,' ',acc.first_name) AS Author from comments cm, accounts acc where cm.account_id=acc.account_id and comment_id=? union select cm.comment_id, cm.comment_description, cm.creation_date, cm.user_id, cm.account_id, CONCAT(us.last_name,' ', us.first_name) AS Author from comments cm, accounts acc, user us where us.user_id = cm.user_id and comment_id=?;";
      db.query(sqlQuery2, [id, id], (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  );
});

app.post("/ticket/addCommentByAccount", (req, res) => {
  const { comment_description, ticket_id, account_id, creation_date } =
    req.body;
  const sqlQuery =
    "INSERT INTO comments(ticket_id,comment_description,account_id,creation_date) VALUES (?,?,?,?);";
  db.query(
    sqlQuery,
    [ticket_id, comment_description, account_id, creation_date],
    (err, result1) => {
      let id = result1.insertId;
      const sqlQuery2 =
        "select cm.comment_id, cm.comment_description, cm.creation_date,  cm.user_id, cm.account_id, CONCAT(acc.last_name,' ',acc.first_name) AS Author from comments cm, accounts acc where cm.account_id=acc.account_id and comment_id=? union select cm.comment_id, cm.comment_description, cm.creation_date, cm.user_id, cm.account_id, CONCAT(us.last_name,' ', us.first_name) AS Author from comments cm, accounts acc, user us where us.user_id = cm.user_id and comment_id=?;";
      db.query(sqlQuery2, [id, id], (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  );
});

app.get("/ticket/getAllTickets", (req, res) => {
  const sqlQuery =
    "select ticket_id, title, body, client_name, status_name, category_name, priority_name, creation_date, closure_date, ticket.user_id, ticket.account_id from ticket, accounts, clients, status, category, priority where ticket.account_id = accounts.account_id and accounts.client_id=clients.client_id and status.status_id=ticket.status_id and category.category_id=ticket.category_id and ticket.priority_id= priority.priority_id ORDER BY creation_date DESC;";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ticket/getTicket", (req, res) => {
  const { tid } = req.query;
  const sqlQuery =
    "SELECT tk.ticket_id, tk.title, tk.body, st.status_name, ct.category_name, pt.priority_name, tk.creation_date, tk.closure_date, tk.user_id, tk.account_id from ticket as tk, status st, category ct, priority pt where tk.status_id=st.status_id AND ct.category_id= tk.category_id AND pt.priority_id = tk.priority_id AND tk.ticket_id = ?;";
  db.query(sqlQuery, [tid], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ticket/getComments", (req, res) => {
  const { tid } = req.query;
  const sqlQuery =
    "select cm.comment_id, cm.comment_description, cm.creation_date, cm.user_id, cm.account_id, CONCAT(acc.last_name,' ',acc.first_name) AS Author from comments cm, accounts acc where cm.account_id=acc.account_id and ticket_id=? union select cm.comment_id, cm.comment_description, cm.creation_date, cm.user_id, cm.account_id, CONCAT(us.last_name,' ', us.first_name) AS Author from comments cm, accounts acc, user us where us.user_id = cm.user_id and ticket_id=? ORDER BY `creation_date` asc;";
  db.query(sqlQuery, [tid, tid], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ticket/getComment", (req, res) => {
  const { cid } = req.query;
  const sqlQuery =
    "select cm.comment_id, cm.comment_description, cm.creation_date,  cm.user_id, cm.account_id, CONCAT(acc.last_name,' ',acc.first_name) AS Author from comments cm, accounts acc where cm.account_id=acc.account_id and comment_id=? union select cm.comment_id, cm.comment_description, cm.creation_date, cm.user_id, cm.account_id, CONCAT(us.last_name,' ', us.first_name) AS Author from comments cm, accounts acc, user us where us.user_id = cm.user_id and comment_id=?;";
  db.query(sqlQuery, [cid, cid], (err, result) => {
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

app.get("/ticket/status", (req, res) => {
  const sqlQuery = "SELECT status_name FROM status;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get("/ticket/priority", (req, res) => {
  const sqlQuery = "SELECT priority_name FROM priority;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get("/ticket/company", (req, res) => {
  const sqlQuery = "SELECT client_name FROM clients;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
