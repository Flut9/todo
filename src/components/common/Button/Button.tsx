import classes from './Button.module.css'

interface IButtonProps {
    children: string,
    isDestructive?: boolean,
    onClick: () => void,
}

const Button: React.FC<IButtonProps> = (props) => {
    const buttonClasses = [
        classes.button, 
        props.isDestructive && classes.button_destructive
    ].join(' ')

    return (
        <button className={buttonClasses} {...props}>{props.children}</button>
    )
}

export default Button