import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Course from "../pages/Course/Course";
import Faq from "../pages/Faq/Faq";
import Blog from "../pages/Blog/Blog";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Checkout from "../pages/Checkout/Checkout";
import ProtectedRoutes from "./ProtectedRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('https://learning-website-server-ten.vercel.app/course')
            },
            {
                path: '/course/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://learning-website-server-ten.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <ProtectedRoutes><Profile></Profile></ProtectedRoutes>
            },
            {
                path: '/checkout/:id',
                element: <ProtectedRoutes><Checkout></Checkout></ProtectedRoutes>,
                loader: ({ params }) => fetch(`https://learning-website-server-ten.vercel.app/course/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])