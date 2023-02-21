import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import MainPage from './pages/index'

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainPage />
    },
    {
        path:'/auth',
        children:[
            {
                path:'login',
                element:<MainPage/>,
            },
            {
                path:'register',
                element:<MainPage/>
            }
        ]
    },
    
])


export default Router