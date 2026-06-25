import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);

    const handleAdd=()=>{
        return setCount(count+1)
    };

    const handleReduce=()=>{
        return setCount(count-1)
    };

    const handleReset=()=>{
        return setCount(0)
    };

  return (
    <>
    <div>Count:{count}</div>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleReduce} disabled={count<1}>Reduce</button>
    <button onClick={handleReset}>Reset</button>

    </>
  )
}

export default Counter