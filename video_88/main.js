const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/About", (req, res) => {
  res.send("About us");
});
app.get("/Contact", (req, res) => {
  res.send("Hello Contact");
});
app.get("/Blog", (req, res) => {
  res.send("Hello Blog");
});

app.get('/Blog/:slug', (req, res) => {
    //logic to fetch {slug} from db
    console.log(req.params)
    console.log(req.query)
  res.send(`Hello ${req.params.slug}`);
})

// app.get('/Blog/intro-to-js', (req, res) => {
//   res.send('Intro to Js')
// })
// app.get('/Blog/intro-to-python', (req, res) => {
//   res.send('Intro to python')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
