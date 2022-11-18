import configuration from '../db/dbconfiguration'
import { Client } from 'pg'

type Todo = {
    todoID: string;
    title: string;
    todoStatus: string;
};

const client = new Client(configuration);

client.connect((err) => {
    if (err) throw Error(err.message);
});


const getTodos = async () => {
    const { rows } = await client.query('SELECT todoID, title, todoStatus FROM Todos');
    return rows
}

const getTodo = async (todoID: Todo['todoID']) => {
    const result = await client.query('SELECT todoID, title, todoStatus FROM Todos WHERE todoID=$1', [todoID]);
    return result.rows
}

const deleteTodo = async (todoID: string) => {
    const result = await client.query('DELETE FROM Todos WHERE todoID=$1', [todoID]);
    return result.rows
}

const updateTodo = async (todo: Todo) => {
    const { todoID, title, todoStatus } = todo
    const result = await client.query('UPDATE Todos SET title= $2, todoStatus=$3 WHERE todoID=$1', [todoID, title, todoStatus]);
    return result.rows
}

const addTodo = async (todo: Todo) => {
    const { todoID, title, todoStatus } = todo
    const result = await client.query('INSERT INTO Todos(todoID,title,todoStatus) VALUES($1,$2,$3) RETURNING *', [todoID, title, todoStatus]);
    return result.rows
}


export { getTodos, getTodo, deleteTodo, addTodo, updateTodo }