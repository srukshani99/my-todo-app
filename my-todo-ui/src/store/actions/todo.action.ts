
import { TodoTask } from '../../models/TodoTask';
import { getTodoTasksList, createTodoTask, updateTodoTaskStatus, deleteTodoTask, getTodoTasksListByTitle } from '../../services/todo.service';
import todoStore from '../reducers/todo.store';
import { message } from 'antd';

export const fetchTodoList = (): any => {
    return (disptach: any) => {
        disptach(todoStore.actions.todoListFetch());

        getTodoTasksList().then((response) => {
            if(response.status == 200){
                disptach(todoStore.actions.todoListFetchSuccess(response.data.data));
            }
        })
        .catch((error) => {
            message.error(`Failed : ${error.response?.data?.message}`);
            disptach(todoStore.actions.todoListFetchFail(error));
        }) 
    }
}

export const searchTodoList = (value: string): any => {
    return (disptach: any) => {
        disptach(todoStore.actions.todoListFetch());

        getTodoTasksListByTitle(value).then((response) => {
            if(response.status == 200){
                disptach(todoStore.actions.todoListFetchSuccess(response.data.data));
            }
        })
        .catch((error) => {
            message.error(`Failed : ${error.response?.data?.message}`)
            disptach(todoStore.actions.todoListFetchFail(error));
        }) 
    }
}


export const addTaskTodoList = (reqData: TodoTask): any => {
    return (disptach: any) => {
        disptach(todoStore.actions.todoTaskCreate());

        createTodoTask(reqData).then((response) => {
            if(response.status == 201){
                disptach(todoStore.actions.todoTaskCreateSuccess(response.data.data));
            }
        })
        .catch((error) => {
            message.error(`Failed : ${error.response?.data?.message}`)
            disptach(todoStore.actions.todoTaskCreateFail(error));
        }) 
    }
}

export const modifyTodoTaskStatus = (taskId: number, reqData: {}): any => {
    return (disptach: any) => {
        disptach(todoStore.actions.todoTaskUpdate());

        updateTodoTaskStatus(taskId, reqData).then((response) => {
            if(response.status == 200){
                disptach(todoStore.actions.todoTaskUpdateSuccess(response.data.data));
            }
        })
        .catch((error) => {
            message.error(`Failed : ${error.response?.data?.message}`)
            disptach(todoStore.actions.todoTaskUpdateFail(error));
        }) 
    }
}

export const removeTodoTask = (taskId: number): any => {
    return (disptach: any) => {
        disptach(todoStore.actions.todoTaskDelete());

        deleteTodoTask(taskId).then((response) => {
            if(response.status == 200){
                disptach(todoStore.actions.todoTaskDeleteSuccess(response.data.data));
            }else{
                disptach(todoStore.actions.todoTaskDeleteFail());
            }
        })
        .catch((error) => {
            message.error(`Failed : ${error.response?.data?.message}`)
            disptach(todoStore.actions.todoTaskDeleteFail(error));
        }) 
    }
}