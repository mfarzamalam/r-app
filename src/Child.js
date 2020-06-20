import React, {useContext} from 'react';
import CountContext from './CounterContext';
import Grandchild from './Grandchild';

const Child = () => {
    let countervalue = useContext(CountContext);
    console.log(countervalue);  // printing value on console by app.js

    return <div>
        <h4>Child value is : </h4>
        <Grandchild></Grandchild>
    </div>
}

export default Child;