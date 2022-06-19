import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import { useTypedStoreActions, useTypedStoreState } from '../../store/hooks'
import { formatDate } from '../../helpers'
import { Todo as TodoType } from '../../types/index'

import { CreateTodoModal } from './create-todo.modal'
import { TodoItem } from './todo-item'

import './todo.scss'

const Todo = () => {
    const [searchText, setSearchText] = useState<string>('')
    const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([])

    const {todos} = useTypedStoreState(state => state.todo)
    const {deleteTodo, setCompleted} = useTypedStoreActions(state => state.todo)
    const {addModal} = useTypedStoreActions(store => store.modal)

    useEffect(() => {
        setFilteredTodos(todos)
        setSearchText('')
    }, [todos])

    useEffect(() => {
        const filtered = todos.filter(el => el.text.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredTodos(filtered)
    }, [searchText])

    const newHandler = () => {
        const modalId = nanoid()

        const newModal = <CreateTodoModal key={modalId} id={modalId}/>

        addModal({id: modalId, node: newModal})
    }

    return (
        <section className="section todo">
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className="todo__search" placeholder="Search..."/>
            <ul className="todo__list">
                {
                    filteredTodos.length
                        ?
                        filteredTodos.map(el =>
                            <TodoItem
                                key={el.id}
                                id={el.id}
                                completed={el.completed}
                                text={el.text}
                                creationDate={formatDate(el.creationDate)}
                                deleteHandler={deleteTodo}
                                completeHandler={setCompleted}/>
                        )
                        :
                        <p className="todo__absence">No one To Do</p>
                }
            </ul>
            <button onClick={newHandler} className="todo__create">Create New To Do</button>
        </section>
    )
}

export { Todo }