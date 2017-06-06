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

  let html = ``
  // for (let i = 0; i < orderData.length; i += 1) {
  //   html += `<div>${orderData[i].total}</div>`
  // }
  // orderData.forEach((value) => {
  //   html += `<div>${value.total}</div>`
  // })
  // res.send(html)
  res.render(`orders`, { orderData })
})

//   res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <link rel="stylesheet" type="text/css" href="style.css" />
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>

// <body>

//   <div class="head">
//     <div class="container">
//       <ul class="navigation">
//         <li><a href="http://localhost:3000/About-us">About</a></li>
//         <li><a href="http://localhost:3000/Contact-us">Contact</a></li>
//         <li>Other</li>
//       </ul>
//     </div>
//   </div>

//   <div class="mainChunk">
//     <h3>Pratix's First Website</h1>
//     <p>__________________________</p>
//     <h2>Welcome To My Masterpiece</h2>
//   </div>

// </body>
// </html>`)
// })

// app.get(`/about-us`, function(req, res) {
//   res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <link rel="stylesheet" type="text/css" href="styleAbout.css" />
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>

// <body>
//   <div class="head">
//     <div class="container">
//       <ul class="navigation">
//         <li><a href="http://localhost:3000/">Main Menu</a></li>
//         <li><a href="http://localhost:3000/Contact-us">Contact</a></li>
//         <li>Other</li>
//       </ul>
//     </div>
//   </div>

//   <div class="mainChunk">
//     <h3>Pratix Parikh</h1>
//     <p>__________________________</p>
//     <h2>ABOUT ME</h2>
//   </div>

//   <div class="header2">
//     <div class="container1">
//       <ul class="info">
//         <li>About Me</li>
//         <li>About This Site</li>
//         <li>More Stuff</li>
//       </ul>
//     </div>
//   </div>


// </body>

// </html>`)
// })

// app.get(`/Contact-us`, function (req, res) {
//   res.send(`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <link rel="stylesheet" type="text/css" href="styleContact.css" />
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Pratix Contact Me</title>
//   </head>

//   <body>
//     <div class="head">
//       <div class="container">
//         <ul class="navigation">
//           <li><a href="http://localhost:3000/">Main Menu</a></li>
//           <li><a href="http://localhost:3000/About-us">About</a></li>
//           <li>Other</li>
//         </ul>
//       </div>
//     </div>

//     <div class="mainChunk">
//     <h3>Pratix Parikh</h1>
//     <p>__________________________</p>
//     <h2>CONTACT INFORMATION</h2>
//   </div>

//   </body>

//   </html>`)
// })

// function firstMiddleware(req, res, next) {
//   console.log(`this runs first`)
//   next()
// }

// app.get(`/`, firstMiddleware, function(req, res) {
//   console.log(`this runs second`)
//   res.send(`Hello, World!`)
// })

// app.post(`/`, function(req, res) {
//   console.log(req.headers)
//   res.send(`POST Hello, World!`)
// })

// app.get(`/about-us`, function(req, res) {
//   const query = req.query
//   console.log("About us")
//   res.send('Info' + query.key1)
// })

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})