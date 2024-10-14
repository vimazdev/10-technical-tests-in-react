import React, {useState} from 'react';
import './todo.css';
import ToDoList from '../ToDo-List/ToDoList';
import ListToDo from '../../mocks/TodoList.json';
import format from '../../hooks/formatTask';

const ToDo = () => {
    const [ToDo, setToDo] = useState([])
    const [inputValue, setInputValue] = useState('');


    function handleSubmit(event){
        event.preventDefault();
        setInputValue('');
        const count = ToDo.length;
        const message = event.target[0].value;
        const x_format = format({message,count})
        
        if(x_format == false){
            alert('Task: dont description')
        }else{
            setToDo([...ToDo, x_format])
        }
    }


    function handleDeleteTask(id){
        const z = ToDo.filter(ToDo => ToDo.id !== id);
        setToDo(z)
    }

    

  return (
    <div className='ToDo-container'>

        <div className="ToDo-list">
            <ToDoList ToDo={ToDo.length == 0 ? ListToDo : ToDo} PressDelete={handleDeleteTask}/>
        </div>

        <form className="ToDo-button" id='task-list' onSubmit={handleSubmit}>
            <textarea  type="text" name="task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='leche, pagar banco...'/>
            <button type="submit">
                Add
            </button>
        </form>

    </div>
  )
}

export default ToDo