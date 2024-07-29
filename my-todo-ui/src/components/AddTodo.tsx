import React, { useState } from 'react'

type Props = {
    onAddTodo: (task: string) => void
}
export const AddTodo = ({ onAddTodo }: Props) => {

    const [task, setTask] = useState<string>('');

    const onAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (task) {
            onAddTodo(task);
            setTask('');
        }
    }

    return (
        <form className='add-todo' onSubmit={(e) => onAddTask(e)}>
            <input type='text' className='add-todo-field' placeholder='Enter your todo task...'
                value={task} onChange={(e) => setTask(e.target.value)} />
            <button type='submit' className='btn-primary'>Add Task</button>
        </form>
    )
}
