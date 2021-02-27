import React, { useState } from 'react';
import fake_data from '../../fakeData';
import Product from '../product/Product';
import Cart from '../Cart/Cart';

import './shop.css';

const Shop = () => {
    console.log(fake_data)
    const first10 = fake_data.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product)=>{
        console.log('handle add product', product);
        const newCart = [...cart, product ];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
           <div className="product-container">
         
            {
                products.map(product => <Product handleAddProduct = {handleAddProduct} product={product}> </Product>)
            }
           
           </div>
           <div className="cart-container">
               {/* <h3>this is cart</h3>
               <h5>order summary {cart.length}</h5> */}
           <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;