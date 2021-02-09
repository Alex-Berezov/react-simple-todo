import React, {useState} from 'react';

import addSvg from "../../assets/img/add.svg";
import './Tasks.scss'
import axios from "axios";

function AddTaskLists({list, onAddTask}) {
    const [visibleForm, setVisibleForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [isSending, setIsSending] = useState(false)

    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm)
        setInputValue('')
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const addTask = () => {
        const obj = {
            "listId": list.id,
            "text": inputValue,
            "completed": false
        }
        setIsSending(true)
        axios.post('http://localhost:3001/tasks', obj)
            .then(({data}) => {
                onAddTask(list.id, data)
                toggleFormVisible()
            }).catch(() => {
            alert('Ошибка при добавлении задачи')
        }).finally(() => {
            setIsSending(false)
        })
    }

    return (
        <div className="form">
            {!visibleForm
                ? <div onClick={toggleFormVisible} className="form_close">
                    <img src={addSvg} alt="Add task"/>
                    <p>Новая задача</p>
                </div>
                : <div className="form_open">
                    <input
                        className="field"
                        type="text"
                        placeholder="Текст задачи"
                        value={inputValue}
                        onChange={onInputChange}
                    />
                    <div className="form__buttons">
                        <button onClick={addTask} className="send">
                            {isSending ? 'Добавление...' : 'Добавить задачу'}
                        </button>
                        <button onClick={toggleFormVisible} className="cancel">Отмена</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default AddTaskLists;