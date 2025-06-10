import RestaurantCard from "./RestaurantCard";

import { restaurants } from '../utils/mockData';

const Body = () => {

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

export default Body;
