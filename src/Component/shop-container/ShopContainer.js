import React, { useEffect, useState } from 'react';
import Shoe from '../shoe/Shoe';
import './ShopContainer.css';

const ShopContainer = () => {
 const [shoes,setShoes] = useState([]);
 const [cart, setCart] = useState([]);
 useEffect(() =>{
     fetch('data.json')
     .then(response => response.json())
     .then(data => setShoes(data))
 },[]);

 const evenHandleAddToCart=(shoe)=>{
    const newCart =[...cart, shoe];
    console.log(newCart);
    setCart(newCart);
}
    return (
        <div className="shop-container">
            <div className="shoes-container">
                
                {
                    shoes.map(shoe=> <Shoe 
                    key={shoe.id}
                    shoe={shoe}
                    evenHandleAddToCart={evenHandleAddToCart}
                    ></Shoe>)
                }
    
            </div>
            <div className="cart-container">
               <h1>sellect items</h1>
              <div>
                  {
                      cart.slice(0,4).map((item) => (
                        <h2 className="cart-item" key={item.id}> {item.name}</h2>
                      ))
                  }
              </div>
             <div className="cart-btn">
             <button className='rendom-btn'>
              rendom sellect
              </button>
              <button className='rendom-btn'>
              reset
              </button>
             </div>
            </div>
        </div>
    );
};

export default ShopContainer;