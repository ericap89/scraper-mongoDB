const {Schema , model} = require('mongoose')

const db = {
    Article: require('./NewsArticle.js')(Schema, model)
}

module.exports = db 