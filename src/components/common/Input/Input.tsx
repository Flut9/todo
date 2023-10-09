import React from 'react'
import classes from './Input.module.css'

interface Props {
    value: string,
    placeholder?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown?: (event: React.KeyboardEvent) => void,
}

const Input = (props: Props) => {
    return (
        <input className={classes.input} {...props} />
    )
}

export default Input