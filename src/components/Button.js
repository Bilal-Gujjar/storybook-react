import React from 'react'
import './button.css'


function Button(props) {
  const size = props.size;

    return (
    <button className={["buttonDefault",size].join(" ") }
    onClick={props.onClick}>{props.title}</button>
    );
}

export default Button;

