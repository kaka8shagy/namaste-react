import {IMAGE_URL, } from '../utils/constants';

const RestaurantCard = ({ restaurant }) => {
    const {
        name,
        cloudinaryImageId,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    }= restaurant;
    const imageUrl = `${IMAGE_URL}/${cloudinaryImageId}`;
    return (
        <div className="p-4 w-[250px] bg-gray-100 shadow-lg rounded-lg hover:bg-gray-200">
            <div className="restaurant-img">
                <img className="rounded-lg" src={imageUrl} alt={name} />
            </div>
            <div className="restaurant-details">
                <div className="flex space-between items-center">
                    <h3 className="font-bold pr-2 my-2">{ name }</h3>
                    <span className="restaurant-score">{avgRating}</span>
                </div>
                <div>Cuisines: {cuisines.join(', ')}</div>
                <div>Cost for 2: {costForTwo}</div>
                <div>Delivery Time: {sla.slaString}</div>
            </div>
        </div>
    );
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return <div>
            <label className="absolute bg-black text-white p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props} />
        </div>
    }
}

export default RestaurantCard;