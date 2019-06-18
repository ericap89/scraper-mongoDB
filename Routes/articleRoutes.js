const db = require('../models')

module.exports = app => {
    app.get('./articles', (req,res) => {
        Article.find({}, (e, articles) => {
            if (e) throw e 
            res.json(articles)
        })
    })
}