const express = require('express')
const app = express()

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

