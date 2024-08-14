import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList';
import { SearchTodo } from './SearchTodo';
import { useAppDispatch } from '../store';
import { addTaskTodoList, fetchTodoList, modifyTodoTaskStatus, removeTodoTask, searchTodoList } from '../store/actions';
import { Modal } from 'antd';

const { confirm } = Modal;

export const TodoWrapper = () => {

    const dispatch = useAppDispatch();
    const { success, tasksList, taskCreationRes, taskDeleteRes, taskUpdateRes } = useSelector(({ mytodo }: any) => mytodo)

    useEffect(() => {
        dispatch(fetchTodoList());
    }, [])

    useEffect(() => {
        if (success)
            dispatch(fetchTodoList());
    }, [taskCreationRes, taskDeleteRes, taskUpdateRes])

    const onAddTodo = (taskName: string) => {
        dispatch(addTaskTodoList({ title: taskName }));
    }

    const onDeleteTodo = (taskId: number) => {
        confirm({
            title: 'Are you sure you want to delete this task?',
            onOk: () => dispatch(removeTodoTask(taskId)),
            okText: 'Yes',
            cancelText: 'No',
            icon: null
        })

    }

    const onUpdateTodoStatus = (taskId: number, status: string) => {
        dispatch(modifyTodoTaskStatus(taskId, { status }))
    }

    const onSearchTodos = (value: string) => {
        dispatch(searchTodoList(value));
    }

    return (
        <div className='section-wrapper'>
            <h1>My Todo App</h1>
            <div className='filter-section-wrapper'>
                <SearchTodo onSearchTodos={onSearchTodos} />
            </div>
            <div className='filter-section-wrapper'>
                <AddTodo onAddTodo={onAddTodo} />
            </div>
            {/* {loading ?
                <Spin indicator={<LoadingOutlined spin />} size='large' />
                : */}
                <TodoList tasksList={tasksList} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodoStatus} />
            {/* } */}
        </div>
    )
}
