import { Router } from "express";
import tasksRouter from './tasks.router';

const router = Router();

router.use('/tasks', tasksRouter);

export default router;