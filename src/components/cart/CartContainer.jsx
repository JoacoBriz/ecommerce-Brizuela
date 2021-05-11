import './cartStyles.css'
import { CartContext } from '../../context/cartContext';
import {useContext} from 'react'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 

export const CartContainer = () => {
  const contextCart = useContext (CartContext) 
  const { quantity } = contextCart

  console.log(contextCart)

  function push (){
    alert("This is your Cart");
  }

  return(
    <>
      <FontAwesomeIcon className='cartIcon' onClick={push} icon={faShoppingCart} />
      <p className="cartQuantity">{quantity}</p>
    </>
  );
}