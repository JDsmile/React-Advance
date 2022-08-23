const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database");
const { request, query } = require("express");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//need it to acess req.body
app.use(express.json());

app.get("/todos", (req, res) => {
  let query = "SELECT * FROM todos";
  db.query(query, (err, data) => {
    res.send(data);
  });
});

app.post("/todos", (req, res) => {
  let query = `INSERT INTO todos (content) VALUES("${req.body.content}")`;
  db.query(query, (err, data) => {
    console.log("data,", data);
    res.send({
      smg: "su",
    });
  });
});

app.delete("/todos/:id", (req, res) => {
  let query = `DELETE FROM todos WHERE id =${req.params.id}`;
  db.query(query, (err, data) => {
    res.send(data);
  });
});

app.listen("4000", () => {
  console.log("server running on port 3000");
});
