const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
    
})



/*
   there are 3 endpoint in our code of which only two will require validation get method with /todos is just getting all the todos

   {
    title : String;
    description: String;
   }

   {
    id : String;
   }
*/

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}