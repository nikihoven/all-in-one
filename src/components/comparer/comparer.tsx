import { FC, useEffect, useRef, useState } from 'react'

import './comparer.scss'

interface IComparerProps {
    left: string
    right: string
}

const Comparer: FC<IComparerProps> = ({left, right}) => {
    const [offset, setOffset] = useState(50)
    const [isDown, setIsDown] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        console.log(ref.current.clientWidth)

        const handleUp = () => setIsDown(false)

        window.addEventListener('mouseup', handleUp)
        window.addEventListener('touchend', handleUp)

        return () => {
            window.removeEventListener('mouseup', handleUp)
            window.removeEventListener('touchend', handleUp)
        }
    }, [])

    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            setOffset(x => computeState(x, e))
        }

        if (isDown) {
            window.addEventListener('mousemove', handleMove)
            window.addEventListener('touchmove', handleMove)
        }

        return () => {
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('touchmove', handleMove)
        }
    }, [isDown])

    const down = () => {
        setIsDown(true)
    }

    const computeState = (x: number, e: MouseEvent | TouchEvent) => {
        if (!ref.current) return 0

        let pos: number

        if ('movementX' in e) {
            console.log(e.movementX)
            pos = x + e.movementX / ref.current.clientWidth * 100
        } else {
            pos = (e.touches[0].pageX - ref.current.offsetLeft) / ref.current.clientWidth * 100
        }

        if (pos >= 0 && pos <= 100) {
            return pos
        }

        return x
    }

    return (
        <section className="comparer">
            <div ref={ref} className="comparer__image comparer__image--main" style={{backgroundImage: `url(${right})`}}>
                <div className="comparer__image comparer__image--reducible" style={{
                    backgroundImage: `url(${left})`,
                    clipPath: `polygon(0% 0%, ${offset}% 0%, ${offset}% 100%, 0% 100%)`
                }}/>
                <div className="comparer__line" onMouseDown={down} onTouchStart={down} style={{left: `${offset}%`}}/>
            </div>
        </section>
    )
}

export { Comparer }