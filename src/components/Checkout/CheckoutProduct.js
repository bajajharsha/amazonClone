import React from 'react';
import "../Checkout/CheckoutProduct.css"
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <div>
                <img className="checkoutProduct__image" src={image}></img>
            </div>
            <div className="checkoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <p className="CheckoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_) => (<p>⭐</p>))
                    }
                </div>
                {/* {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )} */}
                <button onClick={removeFromBasket}>Remove from Cart</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
