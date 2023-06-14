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
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass"
import Feedback from "../components/Feedback/Feedback"
import PrivateRoute from "./PrivateRoute"
import MyClass from "../pages/Dashboard/MyClass/MyClass"
import UpdateClass from "../pages/Dashboard/UpdateClass/UpdateClass"
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass"


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
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>,
            },
            {
                path: 'manageClass',
                element: <ManageClass></ManageClass>
            },
            {
                path: 'feedback/:id',
                element: <Feedback></Feedback>
            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'updateClass/:id',
                element: <UpdateClass></UpdateClass>
            },
            {
                path: 'selectedClass',
                element: <SelectedClass></SelectedClass>
            }
        ]
    }
])

export default routes