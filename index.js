var express =require('express')
var mongoose=require('mongoose')
var bodyParser = require('body-parser')
const app =express()
var {addTodo,removeTodo,updateTodo,getTodo}=require('./TodoController')
var {Todo} =require('./database/Todo')
app.get('/',getTodo)
app.use(bodyParser());
app.post('/add',addTodo)
app.delete('/remove',removeTodo)
app.patch('/update',updateTodo)

mongoose.connect('mongodb://admin:admin123!@ds055397.mlab.com:55397/tododatabase', {useNewUrlParser: true,useFindAndModify:true})
app.listen('3000', () => console.log(`Example app listening on port 3000!`))