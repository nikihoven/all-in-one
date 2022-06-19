import { FC, FormEvent, useState } from 'react'
import { nanoid } from 'nanoid'

import { Modal } from '../modal/modal'
import { useTypedStoreActions } from '../../store/hooks'

interface CreateTodoModalProps {
    id: string
}

const CreateTodoModal: FC<CreateTodoModalProps> = ({id}) => {
    const [createToDoText, setCreateToDoText] = useState<string>('')

    const {addTodo} = useTypedStoreActions(state => state.todo)
    const {deleteModal} = useTypedStoreActions(store => store.modal)

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()

        addTodo({id: nanoid(), creationDate: new Date(), completed: false, text: createToDoText})
        deleteModal(id)
    }

    return (
        <Modal onClose={() => deleteModal(id)}>
            <h1 className="modal__title">Create New To Do</h1>
            <form onSubmit={submitHandler} className="todo__form">
                <input onChange={(e) => setCreateToDoText(e.target.value)} type="text" className="form__input"/>
                <button className="form__button">Create</button>
            </form>
        </Modal>
    )
}

export { CreateTodoModal }