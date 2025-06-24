import {IMAGE_URL} from '../utils/constants';

const ItemList = ({ items }) => {
    return (
        <ul>
            {
                items.map(({ card: { info } }) => (
                    <li key={info.id} className="mb-4 flex items-center justify-between relative border-b-2 border-gray-300">
                        <div className="menu-item-details w-9/12 p-2">
                            <p className="font-semibold flex items-center">
                                <span>{info.name}</span>
                                <span className={`${info.isVeg ? 'bg-green-500' : 'bg-red-500'} ml-2 rounded-full w-3 h-3 `}></span>
                            </p>
                            <p>Price: {info.price ? info.price / 100 : 'N/A'}</p>
                            <p>Description: {info.description || 'No description available'}</p>
                        </div>
                        <div className="menu-item-img w-3/12 p-2">
                            {info.imageId && <img alt={info.name} src={`${IMAGE_URL}/${info.imageId}`} style={{ width: '100%' }} />}
                            <button className="p-2 rounded-lg absolute bg-white m-2 cursor-pointer top-0 right-0">+ Add</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default ItemList;