import React from 'react';
import Home from "../components/Home";
import About from "../components/About";
import Detail from "../components/Detail";
import AddOrEdit from "../components/AddOrEdit"
import Email from '../components/Email'
import Tel from '../components/Tel'
import { useRoutes, Navigate } from 'react-router-dom'


function Router(props) {
    return useRoutes([
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />,
            children: [
                {
                    path: "email",
                    element: <Email />
                },
                {
                    path: "tel",
                    element: <Tel />
                },
                {
                    path: "",
                    element: <Navigate replace to="email"/>
                },
            ]
        },
        {
            path: "/add",
            element: <AddOrEdit />
        },
        {
            path: "/detail/:id",
            element: <Detail />
        },
        {
            path: "/edit/:id",
            element: <AddOrEdit />
        },
        {
            path: "/",
            element: <Navigate replace to="/home" />
        }
    ])
}

export default Router;