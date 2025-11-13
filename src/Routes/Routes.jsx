import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../components/Outlet/Root/Root';

import Home from '../components/Outlet/Home/Home';
import AppsPage from '../Pages/AppsPage/AppsPage';
import InstallApp from '../Pages/InstallApp/InstallApp';
import DetailsApp from '../Pages/DetailsApp/DetailsApp';



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        
        children: [
            {
                index:true  ,
                loader: () => fetch('/Trending.json'),
                path: '/',
                Component: Home
            },
            {
                path: '/apps',
                loader:() => fetch('/AppsData.json'),
                Component: AppsPage
            },
            {
                path:'/install',
                loader:() => fetch('/AppsData.json'),
                Component: InstallApp
            },
            {
                path: '/details/:id',
                loader:() => fetch('/AppsData.json'),
                Component: DetailsApp
            }
        ]
    },
]);


