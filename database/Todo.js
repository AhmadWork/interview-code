var mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title:String,
    done:{type:Boolean,default:false}
},{ versionKey: false })



module.exports=mongoose.model('todos',TodoSchema);