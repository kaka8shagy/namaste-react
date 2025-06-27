import { useParams } from "react-router";

import { useState } from "react";

import useRestaurantMenu from "../utils/useRestaurantMenu";

import { IMAGE_URL } from "../utils/constants";
import Card from "./Card";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { restaurantDetails, restaurantMenu } = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

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
        <div className="m-4 p-4 flex flex-col items-center">
            <div>
                <img
                    alt={name}
                    style={{ width: 150 }}
                    src={restaurantImageUrl}
                />
                <h1 className="font-bold">{name}</h1>
                <p>Cuisines: {cuisines.join(", ")}</p>
                <p>Rating: {avgRating}</p>
                <p>Cost for 2: {costForTwoMessage}</p>
                <p>Delivery Time: {slaString}</p>
            </div>
            <h3 className="font-bold my-4">Menu: </h3>
            <div>
                {restaurantMenu.map((menu, index) => (
                    <div
                        className="mb-4"
                        key={menu.title}
                        data-testid="menuCard"
                    >
                        <Card
                            title={
                                menu.title + " (" + menu.itemCards.length + ")"
                            }
                            showItems={index === showIndex}
                            setOpen={() =>
                                showIndex === index
                                    ? setShowIndex(null)
                                    : setShowIndex(index)
                            }
                        >
                            <ItemList items={menu.itemCards} />
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
