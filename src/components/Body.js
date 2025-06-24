import { useState, useEffect } from "react";
import { Link } from "react-router";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

import fetchWithCache from "../utils/fetchWithCache";

import { API_URL } from "../utils/constants";


const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

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

    const extractAllRestaurants = (data) => {
        let allRestaurants = [];
        data?.data?.cards.forEach(card => {
            if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                allRestaurants = card.card.card.gridElements.infoWithStyle.restaurants;
            }
        });
        console.log('Extracted restaurants:', allRestaurants);
        return allRestaurants;
    };

    useEffect(() => {
        // Initial load of restaurants
        // const URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        fetchWithCache(API_URL)
            .then(data => {
                const restaurants = extractAllRestaurants(data);
                setAllRestaurants(restaurants);
                setVisibleRestaurants(restaurants);
            })
            .catch(error => console.error('Error fetching restaurants:', error));
    }, []);
    console.log('restaurants: ', allRestaurants)

    return (
        <div>
            <div className="search-container">
            </div>
            <div className="flex m-4 items-center">
                <button type="button" className="mr-4 p-4 cursor-pointer rounded-lg bg-gray-200" onClick={() => updateList('top')}>Top Rated Restaurants</button>
                <button type="button" className="mr-4 p-4 cursor-pointer rounded-lg bg-gray-200" onClick={() => updateList('veg')}>Veg Only Restaurants</button>
            </div>
            <div className="restaurant-container flex flex-wrap justify-center gap-4">
                {visibleRestaurants.map(({ info }) => 
                    <Link to={`/restaurant/${info.id}`} key={info.id}>
                        {
                            info?.badges?.imageBadges?.length 
                                ? <RestaurantCardPromoted restaurant={info} />
                                : <RestaurantCard restaurant={info} />
                        }
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Body;
