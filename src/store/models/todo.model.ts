import { action, Action } from 'easy-peasy'
import { nanoid } from 'nanoid'

import { Todo } from '../../types'

interface TodoState {
    todos: Todo[]
}

interface TodoActions {
    deleteTodo: Action<this, string>
    setCompleted: Action<this, string>
}

interface TodoThunks {}

export interface TodoModel extends TodoState, TodoActions, TodoThunks {}

export const initialTodoModel: TodoModel = {
    /*  States  */
    todos: [
        {id: nanoid(), text: 'Learn HTML', completed: true, creationDate: new Date(2016, 9, 12, 17, 28)},
        {id: nanoid(), text: 'Learn CSS', completed: false, creationDate: new Date(2016, 10, 4, 12, 1)},
        {id: nanoid(), text: 'Learn JavaScript', completed: false, creationDate: new Date(2020, 8, 20, 20, 54)},
        {id: nanoid(), text: 'Learn React JS', completed: false, creationDate: new Date(2021, 1, 4, 23, 1)}
    ],


    /*  Actions  */
    deleteTodo: action((state, payload) => {
        state.todos = state.todos.filter(el => el.id !== payload)
    }),
    setCompleted: action((state, payload) => {
        state.todos = state.todos.map(el => el.id === payload ? ({...el, completed: !el.completed}) : el)
    })
}