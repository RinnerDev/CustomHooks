import { useEffect } from "react"
import { useReducer } from "react"
import { todoReducer } from "../08-useReucer/todoReducer.js"


export const useTodo = () => {
    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }


    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])

    const onNewAdd = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const onDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const onToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        onNewAdd,
        onDeleteTodo,
        onToggleTodo,
        todos,
        todoCount: todos.length,
        todoPendingCount: todos.filter(todo => !todo.done).length
    }
}