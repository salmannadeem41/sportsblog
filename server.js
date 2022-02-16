const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
const port = process.env.PORT || 5000


mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))



app.get('/', async (req, res) => {
  //
  res.render('articles/home')
})
app.get('/about', async (req, res) => {
  //
  res.render('articles/about')
})

app.use('/articles', articleRouter)

app.listen(port, () =>{
  console.log('Listening to the port no at ${port}');
})