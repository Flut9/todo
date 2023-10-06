import ITodo from '../../types/ITodo'

import TodoItem from '../TodoItem/TodoItem'

import classes from './TodosList.module.css'

interface ITodosProps {
    todos: ITodo[],
    onRemoveButtonClick: (id: string) => void,
    onToggleButtonClick: (id: string) => void,
}

const TodosList: React.FC<ITodosProps> = (props) => {
    return (
        <div className={classes['todos-list']}>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onRemoveButtonClick={props.onRemoveButtonClick} 
                    onToggleButtonClick={props.onToggleButtonClick}
                />
            ))}
        </div>
    )
}

export default TodosList