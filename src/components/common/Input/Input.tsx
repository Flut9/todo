import React from 'react'
import classes from './Input.module.css'

interface IInputProps {
    value: string,
    placeholder?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown?: (event: React.KeyboardEvent) => void,
}

const Input: React.FC<IInputProps> = (props) => {
    return (
        <input className={classes.input} {...props} />
    )
}

export default Input