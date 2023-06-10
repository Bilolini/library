import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './router/index'
import store from './store/index'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} >
                <App />
            </RouterProvider>
        </Provider>
    </React.StrictMode>,
)
