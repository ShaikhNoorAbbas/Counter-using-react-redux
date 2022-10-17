import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from "./Redux/actions"
const App = () => {
  const [allow, setallow] = useState(false);
  const myState = useSelector((state) => state.CounterReducer);
  const myDispatch = useDispatch();

  const plusHandler = () => {
    (allow) ? myDispatch(increment()) : alert("Please Allow Button to Increment");
  };
  const minuHandler = () => {
    (allow) ? myDispatch(decrement()) : alert("Please Allow Button to Decrement");
  };
  const resetHandler = () => {
    allow ? myDispatch(reset()) : alert("Please Allow button to Reset");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{myState}</h1>
        <span className='button-Container' disabled={true}>
          <button onClick={plusHandler}>Click + 1</button>
          <button onClick={minuHandler}>Click - 1</button><br />
          <button onClick={resetHandler}>Reset 0</button><br />
          <button onClick={() => setallow((prevallow) => !prevallow)}>{(allow && <span>Disable Button</span>) || <span>Allow Button</span>}</button>
        </span>
      </header>
    </div>
  );
}

export default App;
