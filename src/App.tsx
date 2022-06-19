import { Route, Routes } from 'react-router-dom'

import { Layout } from './routing/layout/layout'

import { MainPage } from './pages/main.page'

const App = () => {

    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route element={<MainPage/>} path="/"/>
            </Route>
        </Routes>
    )
}

export { App }