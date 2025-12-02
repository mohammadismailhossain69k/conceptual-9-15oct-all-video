import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Homepage from "../Pages/Homepage";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import Signin from "../Pages/Signin";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
        {
            index: true,
            element:<Homepage/> ,
        },
        {
            path: '/about-us',
            element: <AboutUs/>,
        },
        {
            path: '/profile',
            element: <Profile/>,
        },
        {
            path: 'signin',
            element: <Signin/>,
        },
        {
            path: '/signup',
            element: <SignUp/>,
        },
        ]
    }
])

export default router