import React, { useEffect, useState } from 'react';
import Shoe from '../shoe/Shoe';
import './ShopContainer.css';

const ShopContainer = () => {
 const [shoes,setShoes] = useState([]);
 useEffect(() =>{
     fetch('data.json')
     .then(response => response.json())
     .then(data => setShoes(data))
 },[])
  
    return (
        <div className="shop-container">
            <div className="shoes-container">
                
                {
                    shoes.map(shoe=> <Shoe 
                    key={shoe.id}
                    shoe={shoe}
                    ></Shoe>)
                }
     {/*            {
        shoes.map(shoe=><Shoe 
            key={shoe.id}
            shoe={shoe}
            ></Shoe>)
     }  */}
            </div>
            <div className="cart-container">
                <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default ShopContainer;