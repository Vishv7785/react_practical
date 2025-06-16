import React, { useState } from 'react'

function One() {

    const [count,setcount] = useState(0)

    const increment =() =>{
        setcount (count => count + 1);
    };

     const dencrement =() =>{
        setcount (count => count - 1);
    };
    const Zero =() =>{
        setcount (count => 0);
    };

  return (
    <div>
              <p>Count: {count}</p>

       <button onClick={increment}>Increment</button>
        <button onClick={dencrement} >
        Decrement
      </button>
                  <button onClick={Zero}> Zero</button>

    </div>
  )
}

export default One
