import { useEffect } from 'react';

import ReactDOM from 'react-dom/client';


import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';


const AppLayout = () => {
    console.log('render AppLayout');
    useEffect(() => {
        console.log('componentDidMount AppLayout');
    }, []);
    return (
        <div className="app">
            <Header />
            <Outlet />
            {/* <Body />
            <About />
            <Contact /> */}
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
        ],
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
