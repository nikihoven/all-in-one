import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'

import { store } from './store'

import { App } from './App'

import './styles/_start.scss'

const StoreProviderOverride = StoreProvider as any

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProviderOverride store={store}>
            <App/>
        </StoreProviderOverride>
    </BrowserRouter>
)