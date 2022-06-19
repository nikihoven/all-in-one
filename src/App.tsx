import { Route, Routes } from 'react-router-dom'

import { useTypedStoreState } from './store/hooks'

import { Layout } from './routing/layout/layout'

import { Sidebar } from './components/sidebar/sidebar'

import { MainPage } from './pages/main.page'
import { TodoPage } from './pages/todo.page'

const App = () => {
    const {modals} = useTypedStoreState(store => store.modal)

    return (
        <>
            <Sidebar/>
            <Routes>
                <Route element={<Layout/>}>
                    <Route element={<MainPage/>} path="/"/>
                    <Route element={<TodoPage/>} path="/todo"/>
                </Route>
            </Routes>
            {modals && modals.map((el) => el.node)}
        </>
    )
}

export { App }