import { useEffect, useState } from 'react';
import fetchWithCache from './fetchWithCache';

const useRestaurantMenu = (resId) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    

    useEffect(() => {
        const API_URL = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110'
        const URL = `${API_URL}&restaurantId=${resId}`;
        fetchWithCache(URL)
            .then(data => {
                console.log(data)
                const resturant = data?.data?.cards[2]?.card?.card.info;
                const menu = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(card => card.card?.card).filter((card) => card.itemCards?.length);
                setRestaurantDetails(resturant);
                setRestaurantMenu(menu);
                console.log('Restaurant Details:', resturant, menu);
            })
            .catch(error => console.error('Error fetching restaurants:', error));
    }, []);

    return { restaurantDetails, restaurantMenu };
}

export default useRestaurantMenu;