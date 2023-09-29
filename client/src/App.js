import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Single from "./pages/Single"
import Main from "./pages/Main"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "Home",
                element: <Home />
            },
            {
                path: "post/:id",
                element: <Single />
            },
            {
                path: "Write",
                element: <Write />
            },
        ]
    },
    {
        path: "Register",
        element: <Register />
    },
    {
        path: "Login",
        element: <Login />
    }
]);

function App() {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App;
