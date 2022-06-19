import { action, Action } from 'easy-peasy'

import { Modal } from '../../types'

interface ModalState {
    modals: Modal[]
}

interface ModalActions {
    deleteModal: Action<this, string>
    addModal: Action<this, Modal>
}

interface ModalThunks {}

export interface ModalModel extends ModalState, ModalActions, ModalThunks {}

export const initialModalModel: ModalModel = {
    /*  States  */
    modals: [] as Modal[],


    /*  Actions  */
    deleteModal: action((state, payload) => {
        state.modals = state.modals.filter(el => el.id !== payload)
    }),
    addModal: action((state, payload) => {
        state.modals = [...state.modals, payload]
    })
}