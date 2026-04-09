import {createBrowserRouter} from 'react-router-dom'
import Auth from './features/auth/pages/Auth'
import ChatAI from './features/chat-ai/pages/ChatAI'


export const router=createBrowserRouter([
    {
        path:'/auth',
        element:<Auth/>
    },
   {
    path:'/chat',
    element:<ChatAI/>
   }
])