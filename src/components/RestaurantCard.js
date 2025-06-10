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

export default RestaurantCard;