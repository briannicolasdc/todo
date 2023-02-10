import axios from 'axios';

const url = 'http://localhost:5000/api/todo/';
export const createTodo = newTodo => axios.post(url, newTodo);
export const readTodos = () => axios.get(url);


