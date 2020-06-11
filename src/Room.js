import React, { useState } from 'react';
import './App.css';
import './Room.css';

function Room() {

    // console.log("State condition",state);

    let [islit,setlit] = useState(false);
    let [temp, setAge] = useState(70);

    function increase(){
        console.log("Increase Button click");
        setAge(++temp);
    }

    function decrease(){
        console.log("Decrease Button click");
        setAge(--temp);
    }

    return (
        <div>
            {/* <div className={`room ${islit ? "lit" : "dark"}`}>
                Room is {islit ? "lit" : "Dark"}  <button onClick={()=> setlit(!islit)}>Update</button>
            </div> */}

            <div className={`App room ${islit ? "lit":"dark"}`}>
                light is {islit ? "On":"Off"} <button onClick={()=> setlit(true)}>On</button><button onClick={()=> setlit(false)}>off</button> 
            </div>
            <br/>
            
            <div className="App">
                        <h1>Current temperature : <strong>{temp}</strong></h1>
                    <button onClick={increase}>+</button>
                    <button onClick={decrease}>-</button>
            </div>            
        </div>
    );
}

export default Room;