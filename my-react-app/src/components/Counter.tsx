import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((currentCount) => currentCount + 1);
    const decrement = () => setCount((currentCount) => currentCount - 1);
    const reset = () => setCount(0);

    return (
        <div className="App">
            <div>Counter: { count }</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;