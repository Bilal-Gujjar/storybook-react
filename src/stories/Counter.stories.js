import Counter from '../components/Counter'
import React from 'react'
import {withKnobs,number} from '@storybook/addon-knobs'
export default {
    title: "Counter",
    component: Counter,
    decorator: [withKnobs]
}

export function CounterDefault(){
    return(
        <Counter/>
    )
}

export function CounterwithValue(){
    return(
        <Counter initialValue  =  {number("initialValue",35)} />
    )
}

export function CounterwithValueAndColor(){
    return(
        <Counter initialValue  =  {34}   backgroundColor = "red"/>
    )
}

export function CounterwithValueAndColorBlue(){
    return(
        <Counter initialValue  =  {34}   backgroundColor = "blue"/>
    )
}

