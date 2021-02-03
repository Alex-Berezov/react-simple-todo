import React from 'react';

import './Tasks.scss'
import editSvg from "../../assets/img/edit.svg";
// import checkSvg from "../../assets/img/check.svg"

function Tasks() {
    return (
        <div className="todo__tasks">
            <div className="todo__tasks_header">
                <h2>Фронтенд</h2>
                <img onClick={() => alert('Edit header')} src={editSvg} alt="Edit header"/>
            </div>
            <hr/>

            <div className="todo__tasks_items">
                <div className="tasks__items_row">
                    <div className="checkbox">
                        <input id="check" type="checkbox"/>
                        <label htmlFor="check">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </label>
                    </div>
                    <div className="text">
                        <p>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tasks;