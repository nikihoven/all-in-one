import { ReactComponent as CloseIcon } from './images/close.svg'

import './todo.scss'

const Todo = () => {

    return (
        <section className="todo">
            <input type="text" className="todo__search" placeholder="Search..."/>
            <ul className="todo__list">
                <li className="todo__item item">
                    <input type="checkbox" className="item__completed"/>
                    <p className="item__text item__text--completed">HTML</p>
                    <span className="item__date">1 January 2022 12:10</span>
                    <button className="item__delete"><CloseIcon/></button>
                </li>
                <li className="todo__item item">
                    <input type="checkbox" className="item__completed"/>
                    <p className="item__text">CSS</p>
                    <span className="item__date">12 February 2022 20:24</span>
                    <button className="item__delete"><CloseIcon/></button>
                </li>
                <li className="todo__item item">
                    <input type="checkbox" className="item__completed"/>
                    <p className="item__text">JavaScript</p>
                    <span className="item__date">24 March 2022 15:01</span>
                    <button className="item__delete"><CloseIcon/></button>
                </li>
                <li className="todo__item item">
                    <input type="checkbox" className="item__completed"/>
                    <p className="item__text">React JS</p>
                    <span className="item__date">7 May 2022 17:47</span>
                    <button className="item__delete"><CloseIcon/></button>
                </li>
                <li className="todo__item item">
                    <input type="checkbox" className="item__completed"/>
                    <p className="item__text">Redux</p>
                    <span className="item__date">12 June 2022 11:04</span>
                    <button className="item__delete"><CloseIcon/></button>
                </li>
                <li className="todo__item item">
                    <input type="checkbox" className="item__completed"/>
                    <p className="item__text">TypeScript</p>
                    <span className="item__date">29 June 2022 20:11</span>
                    <button className="item__delete"><CloseIcon/></button>
                </li>
            </ul>
            <button className="todo__create">Create New To Do</button>
        </section>
    )
}

export { Todo }