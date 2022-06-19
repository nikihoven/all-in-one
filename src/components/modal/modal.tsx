import { FC, ReactNode } from 'react'

import './modal.scss'

interface ModalProp {
    children: ReactNode
    onClose: () => void
}

const Modal: FC<ModalProp> = ({children, onClose}) => {

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal__card" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export { Modal }