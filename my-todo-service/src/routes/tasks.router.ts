import { Router } from "express";
import { callback } from '../callback'
import { getTodoTasksList, createTodoTask, updateTodoTask, deleteTodoTask } from "../controllers/task.controller";

const router = Router();

router.get('/', callback(getTodoTasksList));
router.get('/:key', callback(getTodoTasksList));
router.post('/', callback(createTodoTask));
router.put('/:taskId', callback(updateTodoTask));
router.delete('/:taskId', callback(deleteTodoTask));

export default router;