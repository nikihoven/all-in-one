import { FC, useRef } from 'react'

import { nanoid } from 'nanoid'

import { useTypedStoreActions } from '../../store/hooks'
import { ComparerModal } from './comparer.modal'

import './comparer.scss'

interface IComparerProps {
    left: string
    right: string
}

const Comparer: FC<IComparerProps> = ({left, right}) => {
    const {addModal} = useTypedStoreActions(state => state.modal)

    const widthRatioRef = useRef<HTMLInputElement | null>(null)
    const heightRatioRef = useRef<HTMLInputElement | null>(null)

    const newHandler = () => {
        const modalId = nanoid()

        if (!widthRatioRef.current?.value || !heightRatioRef.current?.value || +widthRatioRef.current?.value / +heightRatioRef.current?.value > 3 || +heightRatioRef.current?.value / +widthRatioRef.current?.value > 1.2) return

        const newModal = <ComparerModal
            key={modalId}
            id={modalId}
            leftImage={left}
            rightImage={right}
            widthRatio={+widthRatioRef.current?.value}
            heightRatio={+heightRatioRef.current?.value}
        />

        addModal({id: modalId, node: newModal})
    }

    return (
        <section className="comparer">
            <div className="comparer__ratio">
                <label className="comparer__input">
                    Width ratio
                    <input ref={widthRatioRef} type="text"/>
                </label>
                <label className="comparer__input">
                    Height ratio
                    <input ref={heightRatioRef} type="text"/>
                </label>
            </div>
            <button className="comparer__button" onClick={newHandler}>Compare</button>
        </section>
    )
}

export { Comparer }