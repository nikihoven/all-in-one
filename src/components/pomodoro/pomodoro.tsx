import { useState } from 'react'

import { ReactComponent as PauseIcon } from './images/pause.svg'
import { ReactComponent as PlayIcon } from './images/play.svg'

import './pomdoro.scss'

const Pomodoro = () => {
    const [isPaused, setIsPaused] = useState(true)

    return (
        <section className="pomodoro">
            <div className="pomodoro__type">Work</div>
            <div className="pomodoro__timer">38:29</div>
            <button className="pomodoro__management">
                {isPaused ? <PlayIcon/> : <PauseIcon/>}
            </button>
        </section>
    )
}

export { Pomodoro }