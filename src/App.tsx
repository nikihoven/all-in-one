import { Route, Routes } from 'react-router-dom'

import { Layout } from './routing/layout/layout'

import { Sidebar } from './components/sidebar/sidebar'

import { MainPage } from './pages/main.page'

const App = () => {

    return (
        <>
            <Sidebar/>
            <Routes>
                <Route element={<Layout/>}>
                    <Route element={<MainPage/>} path="/"/>
                </Route>
            </Routes>
        </>
    )
}

export { App }