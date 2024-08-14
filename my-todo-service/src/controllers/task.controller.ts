import { Request } from "express";
import { addTodoTask, fetchTodoTaskList, modifyTodoTaskStatus, removeTodoTask } from "../usecases/task.usecase";
import { TodoResponse } from "../models/response.model";

/**
 * Method to get all todo tasks.
 * @param req 
 * @returns 
 */
export const getTodoTasksList = async (req: Request): Promise<TodoResponse> => {
    try {
        const res = fetchTodoTaskList(req.params.key);
        return { statusCode: 200, message: 'Tasks list retreived sucessfully', data: res };
    } catch (error: any) {
        return { statusCode: 500, message: 'Error occured in retriving tasks list.', error: error.message ? error.message : error };
    }
}

/**
 * Method to add new task to the todo list.
 * @param req 
 * @returns 
 */
export const createTodoTask = async (req: Request): Promise<TodoResponse> => {
    try {
        const res = addTodoTask(req.body);
        return { statusCode: 201, message: 'Tasks created sucessfully', data: res };
    } catch (error: any) {
        return { statusCode: 500, message: 'Error occured in adding task.', error: error.message ? error.message : error };
    }
}

/**
 * Method to update the status of the todo task.
 * @param req 
 * @returns 
 */
export const updateTodoTask = async (req: Request): Promise<TodoResponse> => {
    try {
        const res = modifyTodoTaskStatus(Number(req.params.taskId), req.body?.status)
        return { statusCode: 200, message: 'Tasks status updated sucessfully', data: res };
    } catch (error: any) {
        return { statusCode: 500, message: 'Error occured in updating task status.', error: error.message ? error.message : error };
    }
}

/**
 * Method to delete a todo task.
 * @param req 
 * @returns 
 */
export const deleteTodoTask = async (req: Request): Promise<TodoResponse> => {
    try {
        const res = removeTodoTask(Number(req.params.taskId));
        return { statusCode: 200, message: 'Task deleted sucessfully', data: res };
    } catch (error: any) {
        return { statusCode: 500, message: 'Error occured in deleting task.', error: error.message ? error.message : error };
    }
}