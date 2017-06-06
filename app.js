const express = require('express')  
const app = express()
const router = express.Router()

app.set('view engine', 'pug')
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  res.render('index', { title: 'My Website', message: 'Hello there!'})
});
  
app.get('/about-us', (req, res) => {
  res.render('about', {title: 'About Us'})
})
  
app.get('/contact-us', (req, res) => {
  res.render('contact', {title: 'Contact Us'})
})

app.get('/other', (req, res) => {
  res.render('other', {title: "Other"})
})

app.get(`/orders`, (req, res) => {
  const orderData = [
    { id: 1, total: 50.32 },
    { id: 2, total: 6902.23 },  
    { id: 3, total: 987 },
  ]
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})