import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'

import './Tasks.scss'
import editSvg from "../../assets/img/edit.svg";
import AddTaskLists from "./AddTaskLists";
import Task from "./Task";

function Tasks({ list, onEditTitle, onAddTask, withoutEmpty, onRemoveTask, onEditTask, onCompleteTask }) {

    const editTitle = () => {
        const newTitle = window.prompt('Введите новое название', list.name)
        if (newTitle) {
            onEditTitle(list.id, newTitle)
            axios.patch('http://localhost:3001/lists/' + list.id, {
                name: newTitle
            }).catch(() => {
                alert('Не удалось обновить название')
            })
        }
    }

    return (
        <div className="todo__tasks_task">
            <div className="header">
                <Link to={`/lists/${list.id}`}>
                    <h2 style={{ color: list.color.hex }}>{list.name}</h2>
                </Link>
                <img onClick={editTitle} src={editSvg} alt="Edit header"/>
            </div>
            <hr/>

            <div className="items">
                {!withoutEmpty && list.tasks && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
                {list.tasks && list.tasks.map(task => (
                    <Task
                        key={task.id}
                        onRemove={onRemoveTask}
                        onEdit={onEditTask}
                        onComplete={onCompleteTask}
                        list={list}
                        {...task}
                    />
                ))}
            </div>
            <AddTaskLists key={list.id} list={list} onAddTask={onAddTask}/>
        </div>
    );
}

export default Tasks;