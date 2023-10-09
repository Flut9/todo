import ITodo from "../types/ITodo"

export const setTodoItems = (data: ITodo[]) => {
    localStorage.setItem('todos', JSON.stringify(data))
}

export const getTodoItems = (): ITodo[] => {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
}