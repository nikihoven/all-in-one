import { initialTodoModel, TodoModel } from './todo.model'

export interface Model {
    todo: TodoModel
}

const model: Model = {
    todo: initialTodoModel
}

export { model }