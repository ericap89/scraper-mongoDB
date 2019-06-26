const express = require('express')
const app = express()
const axios = require('axios')
const cheerio = require('cheerio')

const db = require('./models/index')

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

// axios request for LATimes
axios.get('https://www.latimes.com/sports/')
.then(({ data }) => {
    const $ = cheerio.load(data)
    const articleArr = []
    $('div.card-content').each((i, elem) => {
        articleArr.push({
            headline: $(elem).children('h3').attr('href'),

            summary: $(elem).children('p.preview-text').text()
        })
      
    })
    db.Article.create(articleArr, _ => console.log('added!'))
})
.catch(err => console.log(err))

