import React from 'react';
import myButton from './button.module.css'
const Button = ({children, ...prop}) => {
    return (
        <button className={myButton.myButton} {...prop}>{children}</button>
    );
};

export default Button;