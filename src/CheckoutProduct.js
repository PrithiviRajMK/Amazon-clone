import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, title, image, price, rating}) {
    const[{basket}, dispatch]=useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
  }
    return (
        <div className="checkoutproduct">
            <img className="checkoutProduct_Image" src={image} alt=""/>
            <div className="checkout_productinfo">
                <p className="checkout_producttitle">{title}</p>
                <p className="Checkout_productprice">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="checkout_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <p>⭐</p>
                    ))
               }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
