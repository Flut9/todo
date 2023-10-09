import React, { useEffect, useState, useCallback } from 'react'
import ITodo from '../../types/ITodo'
import { getUid } from '../../utils/uidUtil'
import { setTodoItems, getTodoItems } from '../../utils/localstorageUtil'

import TodosList from '../../components/TodosList/TodosList'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'

import classes from './Todos.module.css'

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [input, setInput] = useState('')

    useEffect(() => {
        setTodos(getTodoItems())
    }, [])

    const createTodo = useCallback(() => {
        const updatedTodos = [{ id: getUid(), title: input, isCompleted: false }, ...todos]
        setTodos(updatedTodos)
        setTodoItems(updatedTodos)
    }, [input, todos])
 
    const removeAllTodos = useCallback(() => {
        const updatedTodos: ITodo[] = []
        setTodos(updatedTodos)
        setTodoItems(updatedTodos)
    }, [])

    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            createTodo()
        }
    }, [todos])

    const handleInputChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }, [input])

    const removeTodo = useCallback((id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
        setTodoItems(updatedTodos)
    }, [todos])

    const toggleTodo = useCallback((id: string) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id !== id) return todo

            return {
                ...todo,
                isCompleted: !todo.isCompleted
            }
        })

        setTodos(updatedTodos)
        setTodoItems(updatedTodos)
    }, [todos])

    return (
        <div className={classes.todos}>
            <div className={classes.todos__container}>
                <div className={classes.todos__topbar}>
                    <Input
                        value={input}
                        placeholder="Enter a task title: " 
                        onChange={handleInputChanged}
                        onKeyDown={handleKeyDown}
                    />
                    <Button onClick={createTodo}>Add</Button>
                    <Button onClick={removeAllTodos} isDestructive={true}>Remove all</Button>
                </div>
                
                <TodosList
                    todos={todos}
                    onRemove={removeTodo}
                    onToggle={toggleTodo}
                />
            </div>
        </div>
    )
}

export default Todos