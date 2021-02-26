import React, { useState } from 'react';
import fake_data from '../../fakeData';
import Product from '../product/Product';
import './shop.css';
const Shop = () => {
    console.log(fake_data)
    const first10 = fake_data.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
           <div className="product-container">
         
            {
                products.map(product => <Product product={product}></Product>)
            }
           
           </div>
           <div className="cart-container">
               <h3>this is cart</h3>
           </div>
        </div>
    );
};

export default Shop;