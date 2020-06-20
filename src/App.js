import React, { useState } from 'react';
import Welcome from './start';
import Room from './Room';
import Parent from './Parent'

import './App.css';

function App({name,age}) {
        let [number,setnumber] = useState(60);
  return <div><div className="App"><Welcome name={name}></Welcome></div>
                <p>What would you like to do ? </p>
                <ul>
                        <li>go to sleep</li>
                        <li>go to coding</li>
                        <li>Read a book</li>
                </ul>
                I think the best you can do is to read a book coz your age is = {age},
                When you are {age + 10}. Then you'll go for option 2
                <div>
                        <br/> <br/>
                        <Room> </Room>
                </div>

                <br/><br/><br/><br/>
                
                <div>
                        <Parent num={number}></Parent>
                        <button onClick={()=>{ setnumber(++number) }}> Upgrade age ++ </button>
                </div>
        
        </div>

}

export default App;
