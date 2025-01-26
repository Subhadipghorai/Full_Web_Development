const express = require("express");
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog', blog)
app.use('/shop', shop)


app.get("/", (req, res) => {
  console.log("hey this is an get request...");
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("hey this is an post request...");
  res.send("Hello World Post!");
});
app.put("/", (req, res) => {
  console.log("hey this is an put request...");
  res.send("Hello World put!");
});
app.delete("/", (req, res) => {
  console.log("hey this is an delete request...");
  res.send("Hello World delete!");
});

app.get("/index", (req, res) => {
  console.log("hey this is an index");
  res.sendFile("template/index.html",{root:__dirname});
});

app.get("/api", (req, res) => {
  res.json({a:1,b:3,c:4,d:5,h:9, name:["subha","ram","sum","rohan"]});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
