import React, { useContext } from 'react';
import { CounterContext } from '../src/pages/ReducerSetUp';

const ChildrenContext = () => {
    const { state, dispatch } = useContext(CounterContext);

    const incrementHandler = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrementHandler = () => {
        if (state.count > 0) {
            dispatch({ type: 'DECREMENT' });
        }
    };

    return (
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <p>Count: {state.count}</p>
        </div>
    );
};

export default ChildrenContext;
