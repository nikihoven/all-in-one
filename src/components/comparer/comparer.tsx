import { ChangeEvent, useRef, useState } from 'react'

import { nanoid } from 'nanoid'

import { useTypedStoreActions } from '../../store/hooks'
import { ComparerModal } from './comparer.modal'

import './comparer.scss'

const Comparer = () => {
    const {addModal} = useTypedStoreActions(state => state.modal)

    const [images, setImages] = useState<{left: string | null, right: string | null}>({left: null, right: null})

    const widthRatioRef = useRef<HTMLInputElement | null>(null)
    const heightRatioRef = useRef<HTMLInputElement | null>(null)

    const newHandler = () => {
        const modalId = nanoid()

        if (
            !widthRatioRef.current?.value
            ||
            !heightRatioRef.current?.value
            ||
            +widthRatioRef.current?.value / +heightRatioRef.current?.value > 3
            ||
            +widthRatioRef.current?.value / +heightRatioRef.current?.value <= 0
            ||
            +heightRatioRef.current?.value / +widthRatioRef.current?.value > 1.2
            ||
            !images.left
            ||
            !images.right
        ) return

        const newModal = <ComparerModal
            key={modalId}
            id={modalId}
            leftImage={images.left}
            rightImage={images.right}
            widthRatio={+widthRatioRef.current?.value}
            heightRatio={+heightRatioRef.current?.value}
        />

        addModal({id: modalId, node: newModal})
    }

    const leftFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return
        const file = e.target.files[0]
        const src = window.URL.createObjectURL(file)

        setImages(prevState => ({...prevState, left: src}))
    }

    const rightFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return
        const file = e.target.files[0]
        const src = window.URL.createObjectURL(file)

        setImages(prevState => ({...prevState, right: src}))
    }

    return (
        <section className="comparer">
            <div className="comparer__ratio">
                <label className="comparer__input">
                    Width ratio
                    <input ref={widthRatioRef} type="number"/>
                </label>
                <label className="comparer__input">
                    Height ratio
                    <input ref={heightRatioRef} type="number"/>
                </label>
            </div>
            <div className="comparer__files">
                <label className="comparer__input">
                    Add left image
                    <input onChange={leftFileHandler} type="file"/>
                </label>
                <label className="comparer__input">
                    Add right image
                    <input onChange={rightFileHandler} type="file"/>
                </label>
            </div>
            <button className="comparer__button" onClick={newHandler}>Compare</button>
        </section>
    )
}

export { Comparer }