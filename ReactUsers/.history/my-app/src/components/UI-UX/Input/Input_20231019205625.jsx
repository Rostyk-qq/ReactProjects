import React from 'react';
import styleForInput from './input.module.css'
const Input = (...props) => {
    return (
        <input {...props} className={styleForInput.MyInput}  type="search"/>
    );
}

export default Input;