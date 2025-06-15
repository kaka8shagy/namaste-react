import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import fetchWithCache from '../utils/fetchWithCache';

import {IMAGE_URL} from '../utils/constants';
import Card from './Card';

const RestaurantMenu = () => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const { resId } = useParams();

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

    if (!restaurantDetails) {
        return <div>Loading...</div>;
    }

    const {
        name,
        cuisines,
        costForTwoMessage,
        cloudinaryImageId,
        avgRating,
        sla: { slaString },
    } = restaurantDetails;
    const restaurantImageUrl = `${IMAGE_URL}/${cloudinaryImageId}`;

    return (
        <div className="restaurant-menu">
            <img alt={name} style={{ width: 150}} src={restaurantImageUrl} />
            <h1>{name}</h1>
            <h3>Cuisines: </h3>
            <ul>
                {cuisines.map(cuisine => <li key={cuisine}>{cuisine}</li>)}
            </ul>
            <p>Rating: {avgRating}</p>
            <p>Cost for 2: {costForTwoMessage}</p>
            <p>Delivery Time: {slaString}</p>
            <h3>Menu: </h3>
            <div>
                {restaurantMenu.map((menu) => 
                    <Card key={menu.title} title={menu.title}>
                        <ul>
                            {menu.itemCards.map(({card: { info }}) => (
                                <li key={info.id} className="menu-item">
                                    <div>
                                        <p>{info.name}</p>
                                        <p>Price: {info.price ? info.price / 100 : 'N/A'}</p>
                                        <p>Description: {info.description || 'No description available'}</p>
                                    </div>
                                    <div>
                                        {info.imageId && <img alt={info.name} src={`${IMAGE_URL}/${info.imageId}`} style={{ width: 100 }} />}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Card>
                )}
            </div>
        </div>
    );
    
}

export default RestaurantMenu;