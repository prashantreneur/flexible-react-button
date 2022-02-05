import React from 'react';
import './button.css'
const Button = (props) => {
    return (
        <button
            style={{
                backgroundColor: `${props.colorCode}`,
                color: `${props.textColor}`,
            }}
            className={`btn ${props.variant} ${props.size}`}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}
export default Button;