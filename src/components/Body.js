import { useState } from "react";

import RestaurantCard from "./RestaurantCard";

import { restaurants } from '../utils/mockData';

const Body = () => {
    const [visibleRestaurants, setVisibleRestaurants] = useState(restaurants);
    const updateList = (filterType) => {
        if (filterType === 'top') {
            // Logic to filter top rated restaurants
            const newRestaurants = restaurants.filter(restaurant => restaurant.info.avgRating > 4.0);
            setVisibleRestaurants(newRestaurants);
            console.log('Filtering top rated restaurants');
        } else if (filterType === 'veg') {
            // Logic to filter veg only restaurants
            const newRestaurants = restaurants.filter(restaurant => restaurant.info.veg);
            setVisibleRestaurants(newRestaurants);
            console.log('Filtering veg only restaurants');
        }
    };

    return (
        <div>
            <div className="search-container">
            </div>
            <div className="filter-container">
                <button className="filter-btn" onClick={() => updateList('top')}>Top Rated Restaurants</button>
                <button className="filter-btn" onClick={() => updateList('veg')}>Veg Only Restaurants</button>
            </div>
            <div className="restaurant-container">
                {visibleRestaurants.map(({ info }) => 
                    <RestaurantCard key={info.id} restaurant={info} />
                )}
            </div>
        </div>
    )
}

export default Body;
