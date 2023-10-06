import { useEffect, useState } from 'react'
import ITodo from '../../types/ITodo'
import { getUid } from '../../utils/uidUtil'
import { setItem, getItems } from '../../utils/localstorageUtil'

import TodosList from '../../components/TodosList/TodosList'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'

import classes from './Todos.module.css'

const Todos: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [input, setInput] = useState('')

    useEffect(() => {
        setTodos(getItems('todos') as ITodo[])
    }, [])

    const createTodo = () => {
        const updatedTodos = [{ id: getUid(), title: input, isCompleted: false }, ...todos]
        setTodos(updatedTodos)
        setItem('todos', updatedTodos)
    }

    const removeAllTodos = () => {
        const updatedTodos: ITodo[] = []
        setTodos(updatedTodos)
        setItem('todos', updatedTodos)
    }

    const handleKeyDown: React.KeyboardEventHandler = event => {
        if (event.key === 'Enter') {
            createTodo()
        }
    }

    const handleInputChanged: React.ChangeEventHandler<HTMLInputElement> = event => {
        setInput(event.target.value)
    }

    const removeTodo = (id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
        setItem('todos', updatedTodos)
    }

    const toggleTodo = (id: string) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id !== id) return todo

            return {
                ...todo,
                isCompleted: !todo.isCompleted
            }
        })

        setTodos(updatedTodos)
        setItem('todos', updatedTodos)
    }

    return (
        <div className={classes.todos}>
            <div className={classes.todos__container}>
                <div className={classes.todos__topbar}>
                    <Input
                        value={input}
                        placeholder='Enter a task title: ' 
                        onChange={event => handleInputChanged(event)}
                        onKeyDown={event => handleKeyDown(event)}
                    />
                    <Button onClick={createTodo}>Add</Button>
                    <Button onClick={removeAllTodos} isDestructive={true}>Remove all</Button>
                </div>
                
                <TodosList
                    todos={todos}
                    onRemoveButtonClick={removeTodo}
                    onToggleButtonClick={toggleTodo}
                />
            </div>
        </div>
    )
}

export default Todos