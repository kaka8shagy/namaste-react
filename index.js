import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Logo" />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Restaurants</li>
                    <li>Dishes</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({ restaurant: { name, imageUrl, score, cuisines } }) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-img">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="restaurant-details">
                <div className="flex justify-space-between align-items-center">
                    <h3 className="restaurant-name">{ name }</h3>
                    <span className="restaurant-score">{score}</span>
                </div>
                <div>
                    {cuisines.join(', ')}
                </div>
            </div>
        </div>
    );
}



const Body = () => {
    const restaurants = [
        {
            name: 'Meghana Foods',
            score: 4.2,
            cuisines: ['Biryani', 'Dal Tadka', 'Jeera Rice'],
            imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D',
        },
        {
            name: 'Meghana Snacks',
            score: 2.3,
            cuisines: ['Dosa', 'Idli'],
            imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D',
        }
    ]
    return (
        <div>
            <div className="search-container">
            </div>
            <div className="restaurant-container">
                {restaurants.map((restaurant) => <RestaurantCard key={restaurant.name} restaurant={restaurant} /> )}
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div>Footer goes here</div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)
