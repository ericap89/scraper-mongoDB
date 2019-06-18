module.exports = (Schema, model) => {
    const Article = new Schema ({
        headline: String, 
        summary: String ,
        url: String 
    })
    return model('Article', Article)
}
