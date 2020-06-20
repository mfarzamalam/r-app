import React from 'react';
import Child from './Child';

function Parent(p) {
    return (
    <div>
        Parent Age is {p.num}
        <Child chnum={p.num - 30 } ></Child>
    </div>
    );
}

export default Parent;