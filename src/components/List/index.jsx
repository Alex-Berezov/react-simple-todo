import React from 'react'
import classNames from 'classnames'

import './List.scss'
import Badge from "../Badge";
import removeSvg from "../../assets/img/remove.svg"

const List = ({items, isRemoveble, onClick, onRemove}) => {
    const removeList = (item) => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            onRemove(item)
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
                    <i>{item.icons ? item.icons : <Badge color={item.color}/>}</i>
                    <span>{item.name}</span>
                    {isRemoveble &&
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