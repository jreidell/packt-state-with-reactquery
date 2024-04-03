import { useReducer } from "react";

const initialState = { count: 0 };

const types = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset"
};

const reducer = (state, action) => {
    switch (action) {
        case types.INCREMENT:
            return { count: state.count + 1 };
        case types.DECREMENT:
            return { count: state.count - 1 };
        case types.RESET:
            return { count: 0 };
        default:
            throw new Error("This type does not exist");
    }
};

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => dispatch(types.INCREMENT);
    const decrement = () => dispatch(types.DECREMENT);
    const reset = () => dispatch(types.RESET);

    return (
        <div className="App">
            <div>Counter: { state.count }</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default ReducerCounter;