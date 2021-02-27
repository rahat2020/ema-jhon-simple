import React from 'react';

const Cart = (props) => {
    const cart= props.cart
    let total = 0;
    for (let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price;
    }

    let shipping = 0
    if(total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if(total >0) {
        shipping = 12.90
    }

    const tax = Math.round(total / 10);
    return (
        <div>
            <h4>order summary </h4>
            <h5>items order{cart.length}</h5>
            <h5>product price{total}</h5>
            <p><small>shipping cost: {shipping} </small></p>
            <p><small>tax + vat {tax}</small></p>
            <p>Total price {total + shipping}</p>
        </div>
    );
};

export default Cart;