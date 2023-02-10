const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/";

mongoose.connect(url);

const Schema = mongoose.Schema;

const list = new Schema({
    title: {
        type: String,
        required: true
        },
    description: String,
    date: Date,
    done: Boolean
})

const TodoList = mongoose.model('TodoList', list);
module.exports = TodoList;

