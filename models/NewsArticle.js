const mongoose = require('mongoose')

const Article = new mongoose.Schema({
    headline: String, 
    sum: String ,
    url: String 
})

module.exports = mongoose.model('Article', Article)