import { FC, useEffect, useRef, useState } from 'react'

import { Modal } from '../modal/modal'
import { useTypedStoreActions } from '../../store/hooks'

interface ComparerModalProps {
    id: string
    leftImage: string
    rightImage: string
    widthRatio: number | null
    heightRatio: number | null
}

const ComparerModal: FC<ComparerModalProps> = ({id, leftImage, rightImage, widthRatio = 16, heightRatio = 9}) => {
    const {deleteModal} = useTypedStoreActions(store => store.modal)

    const [offset, setOffset] = useState(50)
    const [isDown, setIsDown] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

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
        <Modal onClose={() => deleteModal(id)}>
            <div
                ref={ref}
                className="comparer__image comparer__image--main"
                style={{
                    backgroundImage: `url(${rightImage})`,
                    aspectRatio: `${widthRatio} / ${heightRatio}`
                }}
            >
                <div className="comparer__image comparer__image--reducible" style={{
                    backgroundImage: `url(${leftImage})`,
                    clipPath: `polygon(0% 0%, ${offset}% 0%, ${offset}% 100%, 0% 100%)`
                }}/>
                <div className="comparer__line" onMouseDown={down} onTouchStart={down} style={{left: `${offset}%`}}/>
            </div>
        </Modal>
    )
}

export { ComparerModal }