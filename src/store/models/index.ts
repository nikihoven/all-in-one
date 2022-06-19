import { initialTodoModel, TodoModel } from './todo.model'
import { initialModalModel, ModalModel } from './modal.model'

export interface Model {
    todo: TodoModel,
    modal: ModalModel
}

const model: Model = {
    todo: initialTodoModel,
    modal: initialModalModel
}

export { model }