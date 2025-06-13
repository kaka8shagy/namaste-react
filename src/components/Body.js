import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";

import fetchWithCache from "../utils/fetchWithCache";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [visibleRestaurants, setVisibleRestaurants] = useState([]);
    const updateList = (filterType) => {
        if (filterType === 'top') {
            // Logic to filter top rated restaurants
            const newRestaurants = allRestaurants.filter(restaurant => restaurant.info.avgRating > 4.0);
            setVisibleRestaurants(newRestaurants);
            console.log('Filtering top rated restaurants');
        } else if (filterType === 'veg') {
            // Logic to filter veg only restaurants
            const newRestaurants = allRestaurants.filter(restaurant => restaurant.info.veg);
            setVisibleRestaurants(newRestaurants);
            console.log('Filtering veg only restaurants');
        }
    };

    useEffect(() => {
        // Initial load of restaurants
        fetchWithCache('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING')
            .then(data => {
                const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setAllRestaurants(restaurants);
                setVisibleRestaurants(restaurants);
            })
            .catch(error => console.error('Error fetching restaurants:', error));
    }, []);

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
