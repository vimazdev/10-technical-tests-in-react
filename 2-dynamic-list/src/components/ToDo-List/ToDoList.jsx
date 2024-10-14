import React from 'react';
import './todolist.css';
import { AiOutlineDelete } from "react-icons/ai";

const ToDoList = ({ ToDo, PressDelete }) => {
    return (
        <ul id='ToDo-list'>
            {
                ToDo.map((item, index) => (
                    <li key={index}>
                        <label className='title'>{item.label}</label>
                        <div className="task-item">
                            <div className="task-message">
                                <p>{item.message}</p>
                            </div>
                            <button className="delete" onClick={() => PressDelete(item.id)}><AiOutlineDelete /></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default ToDoList;
