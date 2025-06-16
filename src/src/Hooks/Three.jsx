import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

 const inputRef = useRef();


  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button 
        onClick={() => dispatch(decrement())}
        
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
