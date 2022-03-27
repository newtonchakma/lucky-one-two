import React, { useEffect, useState } from 'react';
import Shoe from '../shoe/Shoe';
import './ShopContainer.css';

const ShopContainer = () => {
 const [shoes,setShoes] = useState([]);
 useEffect(() =>{
     fetch('data.json')
     .then(response => response.json())
     .then(data => setShoes(data))
 },[]);

 const evenHandleAddToCart=(shoe)=>{
    console.log(shoe);
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
               
            </div>
        </div>
    );
};

export default ShopContainer;