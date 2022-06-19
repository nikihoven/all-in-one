import { FC } from 'react'
import { ActionCreator } from 'easy-peasy'

import { ReactComponent as DeleteIcon } from './images/close.svg'

interface TodoItemProps {
    id: string
    completed: boolean
    text: string
    creationDate: string
    deleteHandler: ActionCreator<string>
    completeHandler: ActionCreator<string>
}

const TodoItem: FC<TodoItemProps> = ({id, completed, text, creationDate, completeHandler, deleteHandler}) => {

    return (
        <li className="todo__item item">
            <input onChange={() => completeHandler(id)} checked={completed} type="checkbox" className="item__completed"/>
            <p className={completed ? 'item__text item__text--completed' : 'item__text'}>{text}</p>
            <span className="item__date">{creationDate}</span>
            <button onClick={() => deleteHandler(id)} className="item__delete"><DeleteIcon/></button>
        </li>
    )
}

export { TodoItem }