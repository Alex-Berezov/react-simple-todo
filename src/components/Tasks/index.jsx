import React from 'react';
import axios from "axios";

import './Tasks.scss'
import editSvg from "../../assets/img/edit.svg";
import AddTaskLists from "./AddTaskLists";

function Tasks({list, onEditTitle}) {

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
        <div className="todo__tasks">
            <div className="todo__tasks_header">
                <h2>{list.name}</h2>
                <img onClick={editTitle} src={editSvg} alt="Edit header"/>
            </div>
            <hr/>

            <div className="todo__tasks_items">
                {!list.tasks.length && <h2>Задачи отсутствуют</h2>}
                {list.tasks.map(task => (
                    <div key={task.id} className="tasks__items_row">
                        <div className="checkbox">
                            <input id={`task-${task.id}`} type="checkbox"/>
                            <label htmlFor={`task-${task.id}`}>
                                <svg
                                    width="11"
                                    height="8"
                                    viewBox="0 0 11 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                                        stroke="#000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </label>
                        </div>
                        <input className="text" readOnly value={task.text}/>
                    </div>
                ))}
            </div>
            <AddTaskLists />
        </div>
    );
}

export default Tasks;