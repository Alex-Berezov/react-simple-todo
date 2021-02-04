import React from 'react'
import classNames from 'classnames'
import axios from "axios";

import './List.scss'
import {Badge} from "../../components";
import removeSvg from "../../assets/img/remove.svg"

const List = ({items, isRemovable, onClick, onRemove}) => {

    const removeList = (item) => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
                onRemove(item.id);
            });
        }
    }

    return (
        <ul className="todo__sidebar-list">
            {
                items.map((item, index) => <li
                    className={classNames(item.className, item.active ? 'active' : '')}
                    onClick={onClick}
                    key={item + index}
                >
                    <i>{item.icons ? item.icons : <Badge color={item.color.name} />}</i>
                    <span>{item.name}</span>
                    {isRemovable &&
                    <img
                        onClick={() => removeList(item)}
                        className="list__remove_icon"
                        src={removeSvg}
                        alt="Remove icon"
                    />}
                </li>)
            }
        </ul>
    );
}

export default List;