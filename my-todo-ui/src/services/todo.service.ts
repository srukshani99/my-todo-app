import axioInstance from "../helper/axio-instance";
import * as CONSTANTS from '../constants';
import { TodoTask } from "../models/TodoTask";

const getTodoTasksList = async () => {
    return await axioInstance({
        method: 'get',
        url: `${CONSTANTS.REACT_APP_BACKEND_URL}/tasks`
    })
}

const getTodoTasksListByTitle = async (searchVal: string) => {
    return await axioInstance({
        method: 'get',
        url: `${CONSTANTS.REACT_APP_BACKEND_URL}/tasks/${searchVal}`
    })
}

const createTodoTask = async (reqData: TodoTask) => {
    return await axioInstance({
        method: 'post',
        url: `${CONSTANTS.REACT_APP_BACKEND_URL}/tasks`,
        data: reqData
    })
}

const updateTodoTaskStatus = async (taskId: number, reqData: {}) => {
    return await axioInstance({
        method: 'put',
        url: `${CONSTANTS.REACT_APP_BACKEND_URL}/tasks/${taskId}`,
        data: reqData
    })
}

const deleteTodoTask = async (taskId: number) => {
    return await axioInstance({
        method: 'delete',
        url: `${CONSTANTS.REACT_APP_BACKEND_URL}/tasks/${taskId}`,
    })
}

export {
    getTodoTasksList,
    getTodoTasksListByTitle,
    createTodoTask,
    updateTodoTaskStatus,
    deleteTodoTask
}