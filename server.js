const express = require('express')
const app = express()
const axios = require('axios')
const cheerio = require('cheerio')

//middlware
app.use(express.static(__dirname + "public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
require('./Routes')(app)

// mongoose 
require('mongoose').connect('mongodb://localhost/articles_db' ,{
    useNewUrlParser:true, useCreateIndex:true, useFindAndModify:true })
.then(_ => app.listen(3000))
.catch(err => console.log(err))

// axios request 
axios.get('https://www.latimes.com/sports/')
.then(({ data }) => {
    const $ = cheerio.load(data)
    $('div.card-content').each((i, elem) => {
        console.log($(elem).text())
        
      console.log($(elem).attr('href'))

      console.log($(elem).children('p.preview-text').text())
    })
})
.catch(err => console.log(err))