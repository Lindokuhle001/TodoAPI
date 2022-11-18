import express, { Request, Response } from 'express'
import { getTodosContoller, getTodoContoller, deleteTodoContoller, addTodoContoller, updateTodoContoller } from '../controler/index'
const router = express.Router()
router.use(express.json());

router.get('/getTodos', (req: Request, res: Response) => {
    try {
        getTodosContoller().then((data) => res.send(data))
    } catch (error) {
        res.send({ status: '500' })
    }
})

router.get('/getTodo/:todoID', (req: Request, res: Response) => {
    const { todoID } = req.params

    try {
        getTodoContoller(todoID).then((data) => res.send(data))
    } catch (error: any) {
        res.send({ status: 500, message: error.message })
    }
})

router.delete('/deleteTodo/:todoID', (req: Request, res: Response) => {
    const { todoID } = req.params

    try {
        deleteTodoContoller(todoID).then((data) => res.send(data))
    } catch (error: any) {
        res.send({ status: '500', message: error.message })
    }
})

router.post('/addTodo', (req: Request, res: Response) => {
    const { title } = req.body
    try {
        addTodoContoller(title).then((data) => res.send(data))
    } catch (error: any) {
        res.send({ status: '500', message: error.message })
    }
})

router.put('/updateTodo/:todoID', (req: Request, res: Response) => {
    const { title, todoStatus } = req.body
    const { todoID } = req.params

    try {
        updateTodoContoller(todoID, title, todoStatus).then((data) => res.send(data))
    } catch (error: any) {
        res.send({ status: '500', message: error.message })
    }
})

export default router 