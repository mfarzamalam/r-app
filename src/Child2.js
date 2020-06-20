import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

const Child2 = ()=> {
    let [state,dispatch] = useReducer(CounterReducer,1);

    return (
        <div>
            <h1>This is second child by counter reducer</h1>
            
            <h4>Value : {state}</h4>

            <button onClick={()=>{dispatch('incre')}}> Increement ++ </button>
            <button onClick={()=>{dispatch('dec')}}> Decrement -- </button>
            <button onClick={()=>{dispatch('div')}}> Division </button>
            <button onClick={()=>{dispatch('multi')}}> Multiplication </button>
        </div>
    );
}

export default Child2;