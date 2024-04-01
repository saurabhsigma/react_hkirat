const express = require('express')
const { createTodo } = require('./types');
const { todo } = require('./db')
const app = express();
const cors = require('cors')

app.use(cors());

app.use(express.json())

// body {
//     title : String;
//     description: String;
// }

app.post('/todo', async (req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;

    }
    //put it in mongodb
    await todo.create({
        title : createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
    
})

app.get('/todos', async (req,res)=>{
    const todos =  await todo.find({});
    res.json({
        todos
    })
})

app.put('/completed', async (req,res)=>{
    const updatePayLoad = req.body;
    const parsedPayLoad = updatePayLoad.safeParse(updatePayLoad);
    if(!parsedPayLoad.succes){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg : "Todo marked as completed"
    })

})



app.listen(3000);