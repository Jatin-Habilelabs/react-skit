import React from 'react'
import { useCounter } from './CounterContext'

const PlusButton = () => {
    const { setCounter } = useCounter();
    
    const handleClick = () => {
        setCounter(prev => prev + 1);
    }
    
    return (
        <div>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default PlusButton
