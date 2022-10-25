const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
const categories = require('./data/Categories/Category.json')
const courses = require('./data/Course/Courses.json')
app.get('/',(req,res) =>{
    res.send('Fun Learning Time running ....')
})
app.get('/categories',(req,res) =>{
    res.send(categories)
})
app.get('/category/:id',(req,res) =>{
    const id = req.params.id;
    const category = courses.find( c => c.category_id == id)
    res.send(category)
})

app.listen(port, () =>{
    console.log('fun learning time',port)
})