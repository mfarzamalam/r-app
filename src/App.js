import React, {useContext, useState} from 'react';
import Parent from './Parent'
import './App.css';

import CountContext from './CounterContext';

function App() {
        let val = useContext(CountContext);
        let countState = useState(200);
           //[countState,setState]

        return (
                <CountContext.Provider value={countState}>
                        <div>
                        <h4>App value is {val}</h4>
                        <Parent></Parent>
                        </div>
                </CountContext.Provider>
        );
}

export default App;