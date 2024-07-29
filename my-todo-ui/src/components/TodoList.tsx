import React from 'react'
import { CheckCircleFilled, DeleteFilled, CloseCircleFilled, DropboxOutlined } from "@ant-design/icons";
import { Tag, Tooltip } from 'antd';
import { TodoTask } from '../models/TodoTask';

type Props = {
  onDeleteTodo: (id: number) => void,
  onUpdateTodo: (id: number, status: string) => void,
  tasksList: any
}

export const TodoList = ({ onDeleteTodo, onUpdateTodo, tasksList }: Props) => {

  return (
    <div className='todo-list'>
      <div className="table-parent__wrapper">
        <table className='table table-default'>
          <tbody>
            <tr className='table-header'>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
            {tasksList && tasksList.length > 0 ? tasksList.map((task: TodoTask, index: number) => {
              return (
                <tr key={index} className='table-row'>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td><Tag color={task.status === 'done' ? '#0AA918' : '#B4193C'}>{task.status}</Tag></td>
                  {task.status === 'done' ?
                    <td className=''><Tooltip title={'Mark not done'}><CloseCircleFilled className='table-icons' onClick={() => onUpdateTodo(task.id!, task.status!)} /></Tooltip></td>
                    :
                    <td className=''><Tooltip title={'Mark done'}><CheckCircleFilled className='table-icons' onClick={() => onUpdateTodo(task.id!, task.status!)} /></Tooltip></td>
                  }
                  <td><Tooltip title='Delete task'><DeleteFilled className='table-icons' onClick={() => onDeleteTodo(task.id!)} /></Tooltip></td>
                </tr>
              )
            })
              : <tr><td><DropboxOutlined  className='no-data-icon'/>No todo tasks</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
