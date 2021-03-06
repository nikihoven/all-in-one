import { ReactNode } from 'react'

export type Todo = {
    id: string,
    text: string,
    completed: boolean,
    creationDate: Date
}

export type Modal = {
    id: string,
    node: ReactNode
}