import React, {useContext} from 'react';
import countcontext from './CounterContext';

const GrandChild = () => {
    let value = useContext(countcontext);
    console.log(value);

    return (
        <div>
            <h1>This is grand child by counter Context</h1>

            <h4>GrandChild value is : {value[0]}</h4>
            <button onClick={()=> { console.log("Button pressed")
                              value[1]         (++value[0]) }} >  
                            {/*200(setstate)  ++200(countstate)  */}
            Increment ++ </button>
        </div>
    );
}

export default GrandChild;