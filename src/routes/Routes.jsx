import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../pages/Home/Home/Home"
import Login from "../pages/Login/Login"
import Registration from "../pages/Registration/Registration"
import Classes from "../pages/Classes/Classes"
import Instructors from "../pages/Instructors/Instructors"
import DashboardLayout from "../Layout/DashboardLayout"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers"
import AddClass from "../pages/Dashboard/AddClass/AddClass"


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/registration',
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
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>,
            }
        ]
    }
])

export default routes