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

app.get(`/Exchange-rate`, (req, res) => {
  res.render('exchange-rate', {title: 'Exchange Rate'})
  const folder = require('./desktop/Yelp API/api')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
}) 