// updater function
// = A function passed as an argument to setState() usually
// ex. setyear(arrow funciton)
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions
// it allow handle multiple states at onChange ex increment the counter
// the couner by 2 times
import React, { useState } from "react";

function Counter(){
    //in dec reset
    
    const [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(c=>c+1);
        setCount(c=>c+1);  // updater function 
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

    return(
        <div className="counter-app">
            <h2 className="counter-title">Counter APP</h2>
            <div className="counter-display">
                <div className="counter-number">{count}</div>
            </div>
            <div className="counter-buttons">
                <button className="counter-btn increment-btn" onClick={increment}>
                    Increment
                </button>
                <button className="counter-btn reset-btn" onClick={reset}>
                    Reset
                </button>
                <button className="counter-btn decrement-btn" onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>
    )



}

export default Counter;