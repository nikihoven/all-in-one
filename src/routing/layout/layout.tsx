import { Outlet } from 'react-router-dom'

import './layout.scss'

const Layout = () => {

    return (
        <main className="layout">
            <div className="layout__container">
                <Outlet/>
            </div>
        </main>
    )
}

export { Layout }