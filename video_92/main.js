
const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let SiteName = "Adidas"
    let searchText = "search Now..."
    
    let arr = ["Hey",2,3,4,5]

    res.render("index" ,{SiteName: SiteName, searchName: searchText,arr})
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "My Blog and why"
    let blogContent = "Its is a good  blog..." 
  res.render("template\blogpost.html" ,{blogTitle:blogTitle,blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})