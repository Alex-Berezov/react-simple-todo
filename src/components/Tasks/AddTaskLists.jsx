import React, { useState } from 'react';

import addSvg from "../../assets/img/add.svg";
import './Tasks.scss'

function AddTaskLists() {
    const [visibleForm, setVisibleForm] = useState(false)

    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm)
    }

    return (
        <div className="todo__tasks_form">
            {!visibleForm
                ? <div onClick={toggleFormVisible} className="form_close">
                    <img src={addSvg} alt="Add task"/>
                    <p>Новая задача</p>
                </div>
                : <div className="form_open">
                    <input className="field" type="text" placeholder="Текст задачи"/>
                    <div className="form__buttons">
                        <button className="send">Добавить задачу</button>
                        <button onClick={toggleFormVisible} className="cancel">Отмена</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default AddTaskLists;