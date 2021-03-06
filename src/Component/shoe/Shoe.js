import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './shoe.css';

const Shoe = (props) => {
    const {shoe,evenHandleAddToCart} = props;
    const {name,picture,price} = shoe;
  
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={picture} alt="" />
            </div>
            <div className="card-info">
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            </div>
        <button onClick={()=>evenHandleAddToCart(shoe)} className='btn-cart'>
                <p className='btn-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Shoe;