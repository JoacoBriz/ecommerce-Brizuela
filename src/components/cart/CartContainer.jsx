import './cartStyles.css'
import { CartContext } from '../../context/cartContext';
import { useState, useContext } from 'react'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 

export const CartContainer = () => {
  const cart = useContext (CartContext)
  const [cartQuantity] = useState(cart.length)

  function push (){
    alert("This is your Cart");
  }
  return(
    <>
      <FontAwesomeIcon className='cartIcon' onClick={push} icon={faShoppingCart} />
      <p className="cartQuantity">{cartQuantity}</p>
    </>
  );
}