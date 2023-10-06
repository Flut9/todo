import ITodo from '../../types/ITodo'

import trashImg from '../../assets/icons/trash.svg'
import checkmarkImg from '../../assets/icons/checkmark.svg'
import classes from './TodoItem.module.css'

interface ITodoItemProps extends ITodo {
    onRemoveButtonClick: (id: string) => void,
    onToggleButtonClick: (id: string) => void,
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
    return (
        <div className={classes['todo-item']}>
            <div className={classes['todo-item__container']}>
                <button 
                    className={classes['todo-item__toggle-btn']}
                    onClick={() => props.onToggleButtonClick(props.id)}
                >
                    {props.isCompleted && 
                        <img src={checkmarkImg} />
                    }
                </button>
                <span className={classes['todo-item__title']}>{props.title}</span>
            </div>
            <button
                className={classes['todo-item__remove-btn']} 
                onClick={() => props.onRemoveButtonClick(props.id)}
            >
                <img src={trashImg} />
            </button>
        </div>
    )
}

export default TodoItem