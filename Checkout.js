import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import CurrencyFormat from "react-currency-format";


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__img">
                <img className="checkout__ad" 
            src="https://theimpression.com/wp-content/uploads/2018/07/GIVENCHY_NIGHTNOIR_FW18_90S-poster.png" 
            alt=" " /> 
            <div className="checkout__ad__title">
            <h2 className="line1">Exclusive Offer for BOHO customers</h2>
            <p className="line2">Choose your <i>style</i></p>
            </div>
            </div>
            
            {basket?.length === 0 ? (
             <div> 
                 
                 <p>
                     You have no items in your basket.To buy one or more items,click 
                     "Add to basket" next to the item.

                 </p>
              </div>
            ) : (

            <div className="checkout__title"> 
            <h2 className="checkout__heading">Your Shopping Basket</h2>
            
                {/* List out all of the checkout products */}
                {basket.map(item => (
                     <CheckoutProduct 
                     id = {item.id}
                     title = {item.title}
                     image = {item.image}
                     price = {item.price}
                     rating = {item.rating}
                     />
                ))}
                  
                      
                    

                </div>
            


        )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
              
                <Subtotal />
                </div>
        )}
       </div>     
    );
}

export default Checkout;
