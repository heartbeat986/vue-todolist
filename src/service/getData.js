import fetch from '../config/fetch'
import request  from "../config/rquest";

// export const getTodo = () => fetch('todolist',{})


// export const addTodo = (todoItem) => fetch('todolist',{
//     title:todoItem.title,
//     priority:todoItem.priority,
//     deadline:todoItem.deadline
// },'POST')

export const getTodo = () => request.get({},'todolist')

export const addTodo = (todoItem) => request.post(todoItem,'addTodo')