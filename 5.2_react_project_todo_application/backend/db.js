const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect('mongodb+srv://saurabh:EvKJuuNxtsxWGxd0@cluster0.e8d2pel.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title:  String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}