import ReactDOM from 'react-dom/client';

import { lazy, Suspense, useState, useEffect } from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

import { Provider } from 'react-redux';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';

import UserContext from './utils/UserContext';
import appStore from './utils/appStore';


const Grocery = lazy(() => import('./components/Grocery'));
const Cart = lazy(() => import('./components/Cart'));

const AppLayout = () => {
    const [userName, setUserName] = useState('Default User');

    useEffect(() => {
        // Simulate fetching user data
        const fetchUserData = async () => {
            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setUserName('John Doe');
        };
        fetchUserData();
    }, []);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    );
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
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
            {
                path: '/cart',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Cart />
                    </Suspense>
                ),
            },
        ],
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
