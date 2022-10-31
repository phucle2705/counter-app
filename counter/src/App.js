import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    let color = (count > 0) ? "blue" : (count < 0) ? "black" : "red";

    const decrement = () => setCount(count-1);
    const increment = () => setCount(count+1);
    const reset = () => setCount(0);

    return (
        <div className="container">
            <h1>Counter</h1>
            <span id="value" style={{color}}>{count}</span>
            <div className="btn-group">
                <button className="btn btn-decrease" onClick={decrement}>-</button>
                <button className="btn btn-reset" onClick={reset}>RESET</button>
                <button className="btn btn-increase" onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default App