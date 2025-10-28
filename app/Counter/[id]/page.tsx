'use client';
import React, { useState } from 'react';

const CounterPage = () => {
    const [counter, setCounter] = useState(0);
    
    const handleClick = () => {
        setCounter(counter + 1);
    };

    console.log("Triggered render");

    return (
        <main>
            <h1>CounterPage</h1>
            <div>Counter: {counter}</div>
            <button onClick={handleClick}>Increment</button>
        </main>
    );
};

export default CounterPage; // This is the key change

