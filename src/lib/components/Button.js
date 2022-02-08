import React from 'react';
import PropsTypes from 'prop-types';
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


Button.PropsTypes = {
    colorCode: PropsTypes.string,
    textColor: PropsTypes.string,
    variant: PropsTypes.string,
    size: PropsTypes.string,
    type: PropsTypes.string,
    disabled: PropsTypes.bool,
    onClick: PropsTypes.func
}