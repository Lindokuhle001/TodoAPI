import { v4 as uuidv4 } from 'uuid';
import { getTodos, getTodo, deleteTodo, addTodo, updateTodo } from '../model/index'

const getUUID = () => uuidv4();

type Todo = {
  todoID: string;
  title: string;
  todoStatus: string;
};

const getTodosContoller = () => {
  return getTodos()
}

const getTodoContoller = (todoID: Todo['todoID']) => {
  return getTodo(todoID)
}
const deleteTodoContoller = (todoID: Todo['todoID']) => {
  return deleteTodo(todoID)
}

const addTodoContoller = (title: Todo['title']) => {

  const newTodo: Todo = {
    todoID: getUUID(),
    title,
    todoStatus: "inProgress",

  }
  return addTodo(newTodo)
}

const updateTodoContoller = (todoID: Todo['todoID'], title: Todo['title'], todoStatus: Todo['todoStatus']) => {

  const newTodo: Todo = {
    todoID,
    title,
    todoStatus,

  }
  return updateTodo(newTodo)
}


export { getTodosContoller, getTodoContoller, deleteTodoContoller, addTodoContoller, updateTodoContoller }
