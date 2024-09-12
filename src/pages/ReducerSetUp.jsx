import React, { createContext, useReducer } from 'react';
import ChildrenContext from '../../components/ChildrenContext';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count === 20 ? 0 : state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

// Create Context
const CounterContext = createContext();

// Provider Component
const ReducerSetUp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            <ChildrenContext />
        </CounterContext.Provider>
    );
};

export { CounterContext };
export default ReducerSetUp;
