
import { myTasksList } from "../data";
import { Task } from "../models/task.model";
import { TASKSTATUS } from "../enums";

let todoTaskList: Task[] = myTasksList;

/**
 * Method to fetch all available todo task list OR to filter todo tasks by their title.
 * @param key 
 * @returns 
 */
export const fetchTodoTaskList = async (key: string): Promise<Task[] | undefined> => {
    try {
        if (key) {
            return todoTaskList.filter((task: Task) => {
                if (task.title.toLowerCase().includes(key.toLowerCase()))
                    return task;
            })
        }
    } catch (error) {
        console.log(`Usecase | fetchTodoTaskList | Error occurred: ${error} `);
        throw new Error('fetch task list failed');
    }
    return todoTaskList;
}

/**
 * Method to add new task to the totdo task list.
 * @param requestBody 
 * @returns 
 */
export const addTodoTask = async (requestBody: any): Promise<Task | undefined> => {
    let newTask: Task | undefined;
    try {
        newTask = { id: Number(Date.now()), title: requestBody.title, status: TASKSTATUS.NOT_DONE };
        todoTaskList.push(newTask);
    } catch (error) {
        console.log(`Usecase | addTodoTask | Error occurred: ${error} `);
        throw new Error('add task failed');
    }
    return newTask;
}

/**
 * Method to remove the task from todo task list by id.
 * @param taskId 
 * @returns 
 */
export const removeTodoTask = async (taskId: number): Promise<number> => {
    try {
        todoTaskList = todoTaskList.filter((task: Task) => task.id != taskId);
    } catch (error) {
        console.log(`Usecase | removeTodoTask | Error occurred: ${error} `);
        throw new Error('remove task failed');
    }
    return taskId;
}

/**
 * Method to modify task status by task id.
 * @param taskId 
 * @param status 
 * @returns 
 */
export const modifyTodoTaskStatus = async (taskId: number, status: string): Promise<Task | undefined> => {
    let updatedTask: Task | undefined;
    try {
        todoTaskList.map((task: Task) => {
            if (task.id === taskId) {
                task.status = (status === TASKSTATUS.DONE ? TASKSTATUS.NOT_DONE : TASKSTATUS.DONE)
                updatedTask = task;
            }
        });
    } catch (error) {
        console.log(`Usecase | modifyTodoTaskStatus | Error occurred: ${error} `);
        throw new Error('update task status failed');
    }
    return updatedTask;
}