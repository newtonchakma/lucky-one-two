import React from 'react';
import './shoe.css';

const Shoe = (props) => {
    const {name,picture,price} = props.shoe
    return (
        <div className='card'>
            <div>
                <img src={picture} alt="" />
            </div>
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <button className='btn-cart'>add to cart</button>
        </div>
    );
};

export default Shoe;