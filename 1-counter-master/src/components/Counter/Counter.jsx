import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function handleIncrease(){
        const x = counter + 1
        setCounter(x)
    }

    function handleDecrease(){
        const x = counter - 1
        setCounter(x)
    }

  return (
    <div className='counter'>
        <div className="head-counter">
            <h1>Counter Master</h1>
            <span>{counter}</span>
        </div>
        <div className="buttons-counter">
            <button onClick={() => handleDecrease()}>Disminuir</button>
            <button onClick={() => handleIncrease()}>Aumentar</button>
        </div>
    </div>
  )
}

export default Counter


// Develop by Vimaz dev