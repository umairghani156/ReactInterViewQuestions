import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import Home from './pages/Home';
import ReducerSetUp from './pages/ReducerSetUp';

// const initialState={
//   count: 0
// }
// const reducer = (state, action)=>{
//   switch(action.type){
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       if(state.count > 0) return {count: state.count - 1};
//     default:
//       return state
//   }
// }
function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
     {/* <p>Count: {state.count}</p>
     <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
     <button onClick={()=>dispatch({type: "decrement"})}>Decrement </button> */}
     <BrowserRouter>
     <Routes>
       {/* <Route path='/' element={<Home/>} />
       <Route path='/counter' element={<Counter/>} /> */}
       <Route path='/' element={<ReducerSetUp/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
