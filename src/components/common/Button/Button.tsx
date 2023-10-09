import { useMemo } from 'react'

import classes from './Button.module.css'

type Props = {
    children: string,
    isDestructive?: boolean,
    onClick: () => void,
}

const Button = (props: Props) => {
    const getButtonClasses = useMemo(() => {
        return [
            classes.button, 
            props.isDestructive && classes.button_destructive
        ].join(' ')
    }, [props.isDestructive])

    return (
        <button className={getButtonClasses} {...props}>{props.children}</button>
    )
}

export default Button