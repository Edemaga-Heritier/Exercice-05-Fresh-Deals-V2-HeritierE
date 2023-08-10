/*
NE RIEN MODIFIER ICI
*/
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/blueberries.html");
});
app.get("/blueberries.html", (req, res) => {
  res.sendFile(__dirname + "/blueberries.html");
});
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/bestsellers.html", (req, res) => {
  res.sendFile(__dirname + "/bestsellers.html");
});
app.get("/deals.html", (req, res) => {
  res.sendFile(__dirname + "/deals.html");
});
app.get("/jobs.html", (req, res) => {
  res.sendFile(__dirname + "/jobs.html");
});
app.get("/sell.html", (req, res) => {
  res.sendFile(__dirname + "/sell.html");
});
