import React, { useState } from 'react';

type Props = {
    onSearchTodos: (value: string) => void
}
export const SearchTodo = ({ onSearchTodos }: Props) => {

    const [task, setTask] = useState<string>('');

    const handleSearchTasks = (val: string) => {
        setTask(val);
        onSearchTodos(val);
    }

    return (
        <form className='search-todo'>
            <input type='text' className='search-todo-field' placeholder='Search your todo tasks by name...'
                value={task} onChange={(e) => handleSearchTasks(e.target.value)} />
        </form>
    )
}

