import React from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent() {
    return (
    <div>
        <h4>Parent value is : </h4>
        <Child></Child>
        <Child2></Child2>
    </div>
    );
}

export default Parent;