import ITodo from '../../types/ITodo'
import { CallbackWithId } from '../../types/CallbackWithId'

import TodoItem from '../TodoItem/TodoItem'

import classes from './TodosList.module.css'

type Props = {
    todos: ITodo[],
    onRemove: CallbackWithId,
    onToggle: CallbackWithId,
}

const TodosList = ({todos, onRemove, onToggle}: Props) => {
    return (
        <div className={classes['todos-list']}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onRemove={onRemove} 
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default TodosList