import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as HomeIcon } from './images/home.svg'
import { ReactComponent as TodoIcon } from './images/todo.svg'
import { ReactComponent as ComparerIcon } from './images/comparer.svg'
import { ReactComponent as PomodoroIcon } from './images/pomodoro.svg'

import './sidebar.scss'

const Sidebar = () => {
    const [shortMode, setShortMode] = useState(false)

    return (
        <aside className={shortMode ? 'sidebar sidebar--short' : 'sidebar'}>
            <button className="sidebar__burger burger" onClick={() => setShortMode(prev => !prev)}>
                <span className="burger__item"/>
                <span className="burger__item"/>
                <span className="burger__item"/>
            </button>
            <h1 className="sidebar__logo">L<span className="sidebar__logo--hideable">evrono</span></h1>
            <ul className="sidebar__nav nav">
                <NavLink
                    className={
                        ({isActive}) => ['nav__link', isActive ? 'nav__link--active' : null].filter(Boolean).join(' ')
                    }
                    to="/"
                >
                    <HomeIcon className="nav__icon"/>
                    <span className="nav__text">Home</span>
                </NavLink>
                <NavLink
                    className={
                        ({isActive}) => ['nav__link', isActive ? 'nav__link--active' : null].filter(Boolean).join(' ')
                    }
                    to="/todo"
                >
                    <TodoIcon className="nav__icon"/>
                    <span className="nav__text">To Do</span>
                </NavLink>
                <NavLink
                    className={
                        ({isActive}) => ['nav__link', isActive ? 'nav__link--active' : null].filter(Boolean).join(' ')
                    }
                    to="/comparer"
                >
                    <ComparerIcon className="nav__icon"/>
                    <span className="nav__text">Comparer</span>
                </NavLink>
                <NavLink
                    className={
                        ({isActive}) => ['nav__link', isActive ? 'nav__link--active' : null].filter(Boolean).join(' ')
                    }
                    to="/pomodoro"
                >
                    <PomodoroIcon className="nav__icon"/>
                    <span className="nav__text">Pomodoro</span>
                </NavLink>
            </ul>
        </aside>
    )
}

export { Sidebar }