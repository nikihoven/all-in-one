import { FC, ReactNode, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

import './modal.scss'

const modalRoot = document.getElementById('modals')!

interface ModalProp {
    children: ReactNode
    onClose: () => void
}

const Modal: FC<ModalProp> = ({children, onClose}) => {
    const element = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
        modalRoot.appendChild(element)

        return () => {
            modalRoot.removeChild(element)
        }
    }, [])

    return createPortal(
        <div className="modal" onClick={onClose}>
            <div className="modal__card" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        modalRoot
    )
}

export { Modal }