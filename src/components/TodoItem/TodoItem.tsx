import { useCallback } from 'react'
import ITodo from '../../types/ITodo'
import { CallbackWithId } from '../../types/CallbackWithId'

import trashImg from '../../assets/icons/trash.svg'
import checkmarkImg from '../../assets/icons/checkmark.svg'
import classes from './TodoItem.module.css'

type Props = ITodo & {
    onRemove: CallbackWithId,
    onToggle: CallbackWithId,
}

const TodoItem = ({id, title, isCompleted, onRemove, onToggle}: Props) => {
    const toggleHandler = useCallback(() => {
        onToggle(id)
    }, [onToggle, id])

    const removeHandler = useCallback(() => {
        onRemove(id)
    }, [onToggle, id])

    return (
        <div className={classes['todo-item']}>
            <div className={classes['todo-item__container']}>
                <button 
                    className={classes['todo-item__toggle-btn']}
                    onClick={toggleHandler}
                >
                    {isCompleted && 
                        <img src={checkmarkImg} />
                    }
                </button>
                <span className={classes['todo-item__title']}>{title}</span>
            </div>
            <button
                className={classes['todo-item__remove-btn']} 
                onClick={removeHandler}
            >
                <img src={trashImg} />
            </button>
        </div>
    )
}

export default TodoItem