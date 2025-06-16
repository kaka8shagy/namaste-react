import { useParams } from 'react-router';

import useRestaurantMenu from '../utils/useRestaurantMenu';

import {IMAGE_URL} from '../utils/constants';
import Card from './Card';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { restaurantDetails, restaurantMenu } = useRestaurantMenu(resId);

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
        <div className="m-4 p-4">
            <img alt={name} style={{ width: 150}} src={restaurantImageUrl} />
            <h1 className="font-bold">{name}</h1>
            <p>Cuisines: {cuisines.join(', ')}</p>
            <p>Rating: {avgRating}</p>
            <p>Cost for 2: {costForTwoMessage}</p>
            <p>Delivery Time: {slaString}</p>
            <h3 className="font-bold my-4">Menu: </h3>
            <div>
                {restaurantMenu.map((menu) => 
                    <div className="mb-4" key={menu.title}>
                        <Card title={menu.title}>
                            <ul>
                                {menu.itemCards.map(({card: { info }}) => (
                                    <li key={info.id} className="mb-4 flex items-center justify-between">
                                        <div className="menu-item-details">
                                            <p className="font-semibold">{info.name}</p>
                                            <p>Price: {info.price ? info.price / 100 : 'N/A'}</p>
                                            <p>Description: {info.description || 'No description available'}</p>
                                        </div>
                                        <div className="menu-item-img">
                                            {info.imageId && <img alt={info.name} src={`${IMAGE_URL}/${info.imageId}`} style={{ width: 100 }} />}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
    
}

export default RestaurantMenu;