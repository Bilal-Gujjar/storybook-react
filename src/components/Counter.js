import React from 'react'
import Button from './Button'
import {useState} from 'react'


function Counter(props) {

    const[value,setValue] = useState(props.initialValue)
    return (
        <div style = {{backgroundColor: props.backgroundColor}}>
            Hello from Counter{props.initialValue} <br/>
            Value{value}
            <br/>
            <Button title ="Increment" size="large" onClick={()=>{
                setValue(value+1);
            }}/>
            <Button title ="Decrement"size="small" onClick={()=>{
               setValue(value-1);
            }}/>
        </div>
    )
}
 
export default Counter;
