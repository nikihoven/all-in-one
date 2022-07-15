import { useEffect, useRef, useState } from 'react'

import { ReactComponent as PauseIcon } from './images/pause.svg'
import { ReactComponent as PlayIcon } from './images/play.svg'

import { formatTime } from '../../helpers'

import './pomdoro.scss'

const Pomodoro = () => {
    const [settingsInfo] = useState({workMinutes: 45, breakMinutes: 15})
    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState('work')
    const [secondsLeft, setSecondsLeft] = useState(0)

    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)
    const secondsLeftRef = useRef(secondsLeft)

    useEffect(() => {
        const switchMode = () => {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work'
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60

            modeRef.current = nextMode
            setMode(modeRef.current)

            secondsLeftRef.current = nextSeconds
            setSecondsLeft(secondsLeftRef.current)
        }

        secondsLeftRef.current = settingsInfo.workMinutes * 60
        setSecondsLeft(secondsLeftRef.current)

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return
            }
            if (secondsLeftRef.current === 0) {
                return switchMode()
            }

            tick()
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [settingsInfo])

    const tick = () => {
        secondsLeftRef.current--
        setSecondsLeft(secondsLeftRef.current)
    }

    const pauseHandler = () => {
        if (isPaused) {
            setIsPaused(false)
            isPausedRef.current = false
        } else {
            setIsPaused(true)
            isPausedRef.current = true
        }
    }

    return (
        <section className="pomodoro">
            <div className="pomodoro__type">{mode.charAt(0).toUpperCase() + mode.slice(1)}</div>
            <div className="pomodoro__timer">
                {formatTime(Math.floor(secondsLeft / 60)) + ':' + formatTime(secondsLeft % 60)}
            </div>
            <button onClick={pauseHandler} className="pomodoro__management">
                {isPaused
                    ?
                    <PlayIcon/>
                    :
                    <PauseIcon/>
                }
            </button>
        </section>
    )
}

export { Pomodoro }