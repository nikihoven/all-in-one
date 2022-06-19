import { FC, ReactNode, useCallback, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

import './modal.scss'

const modalRoot = document.getElementById('modals')!

interface ModalProp {
    children: ReactNode
    onClose: () => void
}

const Modal: FC<ModalProp> = ({children, onClose}) => {
    const element = useMemo(() => document.createElement('div'), [])

    const handleEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
    }, [])

    useEffect(() => {
        modalRoot.appendChild(element)
        document.addEventListener('keyup', handleEscape)

        return () => {
            document.removeEventListener('keyup', handleEscape)
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