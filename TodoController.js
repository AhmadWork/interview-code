var Todo =require('./database/Todo')
module.exports={
    getTodo:async (req,res)=>{
      const todoList=await Todo.find({})
      if(!todoList){
      res.status(404).send({error: 'no todo have been found'})
      }
      else{
          res.json(todoList).status(200)

      }
    },
    addTodo: async (req,res)=>{

    const newTodo=await new Todo({
        title:req.body.title
    })
    newTodo.save()
    res.send(`todo:${newTodo.title} has been saved`).status(201)

    },
    removeTodo: async (req,res)=> {
        const deletedTodo=await Todo.findById(req.body.id)
   
        if(!deletedTodo)
        res.status(404).send({error: 'no todo have been found'})
else{


       await deletedTodo.remove();

       res.send(` todo have been deleted`).status(200)
}
    },
    updateTodo: async (req,res)=> {
      const updatedTodo=  await Todo.findById(req.body.id);
      if(!updatedTodo)
      res.status(404).send({error: 'no todo have been found'})

      updatedTodo.done=!updatedTodo.done;
      await updatedTodo.save()
      res.send(`todo:${updatedTodo.title} done:${updatedTodo.done}`).status(200)

    }
}