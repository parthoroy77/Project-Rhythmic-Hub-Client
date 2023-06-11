import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../pages/Home/Home/Home"
import Login from "../pages/Login/Login"
import Registration from "../pages/Registration/Registration"
import Classes from "../pages/Classes/Classes"
import Instructors from "../pages/Instructors/Instructors"


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            }
        ]
    }
])

export default routes