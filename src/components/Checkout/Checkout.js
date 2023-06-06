import React from 'react'
import "../Checkout/Checkout.css"
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Cat_Intgration/CEPC/Dongles_routers_1500x300.jpg"></img>
            {basket?.length === 0 ? (
                <div><h2>Your Shopping basket is empty</h2>
                    <p>You have no items in your basket.</p>
                </div>
            ) : (
                <div className="checkout__title"><h2>Your Shopping basket</h2>

                    {/* list out all of the checkout products */}
                    {basket?.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
          
           </div>
                {basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
                )}
        </div>
    )
}

export default Checkout
