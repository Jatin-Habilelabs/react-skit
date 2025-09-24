import React, { useContext } from 'react'
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

const Two = () => {
    const { counter , name} = useContext();
  return (
    <div>
     <h1>Counter Value: {counter}</h1>
     <PlusButton />
     <MinusButton />
    </div>
  )
}

export default Two
