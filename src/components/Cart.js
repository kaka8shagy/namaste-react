import { useSelector, useDispatch } from "react-redux";

import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const onRemoveItem = (itemId) => {
        // This function should handle adding the item to the cart.
        // For example, you might dispatch an action to add the item to the Redux store.
        console.log("Item removed:", itemId);
        dispatch(removeItem(itemId));
    };
    const onClearCart = (item) => {
        // This function should handle adding the item to the cart.
        // For example, you might dispatch an action to add the item to the Redux store.
        console.log("clear cart");
        dispatch(clearCart(item));
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl">Cart</h1>
            <div>
                {cartItems.length === 0 ? (
                    <h2>Your cart is empty</h2>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="mb-4 flex items-center justify-between relative border-b-2 border-gray-300"
                                data-testid="cartItem"
                            >
                                <div className="menu-item-details w-9/12 p-2">
                                    <p className="font-semibold flex items-center">
                                        <span>{item.name}</span>
                                        <span
                                            className={`${
                                                item.isVeg
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                            } ml-2 rounded-full w-3 h-3 `}
                                        ></span>
                                    </p>
                                    <p>
                                        Price:{" "}
                                        {item.price ? item.price / 100 : "N/A"}
                                    </p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <div className="menu-item-img w-3/12 p-2">
                                    {item.imageId && (
                                        <img
                                            alt={item.name}
                                            src={`${item.imageId}`}
                                            style={{ width: "100%" }}
                                        />
                                    )}
                                    <button
                                        className="p-2 rounded-lg absolute bg-white m-2 cursor-pointer top-0 right-0"
                                        onClick={() => onRemoveItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="p-4">
                <button
                    className="bg-red-500 text-white p-2 rounded-lg"
                    onClick={() => onClearCart()}
                >
                    Clear Cart
                </button>
            </div>
            <div className="p-4">
                <h2>Total Items: {cartItems.length}</h2>
                <h2>
                    Total Price:{" "}
                    {cartItems.reduce(
                        (total, item) =>
                            total + (item.price * item.quantity || 0),
                        0
                    ) / 100}
                </h2>
            </div>
        </div>
    );
};

export default Cart;
