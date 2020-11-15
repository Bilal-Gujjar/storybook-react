import React from 'react'
import Button from '../components/Button'


export default {
    title: "Button",
    component: Button
}

export function DefaultButton(){
    return(
        <Button title ="Hello"/>
    )
}
export function SmallButton(){
    return(
        <Button title ="Hello" size='small'/>
    )
}


export function LargeButton(){
    return(
        <Button title ="Hello" size= 'large'/>
    )
}

export function ButtonwithEvent(){
    return(
        <Button title ="Hello" size= 'large' onClick={()=>{
            alert("Inside the story")
        }}/>
    )
}

