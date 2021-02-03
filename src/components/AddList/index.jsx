import React, {useState} from 'react';
import List from "../List";

import './AddList.scss'
import Badge from "../Badge";
import closeSvg from '../../assets/img/close.svg'

function AddList({colors, onAdd}) {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const handleWriteText = (e) => {
        setInputValue(e.target.value)
    }

    const onClose = () => {
        setVisiblePopup(false)
        setInputValue('')
        setSelectedColor(colors[0].id)
    }

    const addNewList = () => {
        if (!inputValue) {
            alert('Заполните название списка')
        } else {
            const color = colors.filter(c => c.id === selectedColor)[0].name
            onAdd({
                "id": Math.random(),
                "name": inputValue,
                color
            })
        }
        onClose()
    }

    return (
        <div className="add__list">
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        className: "list__add-button",
                        icons: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1V11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1 6H11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>,
                        name: 'Добавить список'
                    }
                ]}
            />
            {visiblePopup && (
                <div className="add__list_popup">
                    <img
                        onClick={onClose}
                        src={closeSvg}
                        alt="Close popup btn"
                        className="add__list_popup_close-btn"/>

                    <input
                        className="field"
                        type="text"
                        placeholder="Название списка"
                        value={inputValue}
                        onChange={handleWriteText}

                    />

                    <div className="add__list_popup-colors">
                        {
                            colors.map(color => (
                                <Badge
                                    onClick={() => setSelectedColor(color.id)}
                                    color={color.name}
                                    key={color.id}
                                    className={selectedColor === color.id && 'active'}
                                />
                            ))
                        }
                    </div>
                    <button onClick={addNewList} className="button">Добавить</button>
                </div>
            )}
        </div>
    );
}

export default AddList;