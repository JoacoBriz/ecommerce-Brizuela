import './ItemDetailStyles.css'
import { ItemCount } from './increment/ItemCount'
import { useState, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const ItemDetail = ({ props, name, image, price }) => {
  const [quantity, setQuantity] = useState(0)
  const [buttonBuy, setButtonbuy] = useState(false)
  const { addToCart } =  useContext(CartContext)

  const incrementQuantity = () => {
    if(quantity <= 4){
      setQuantity(quantity + 1);
    } else {
      alert('I havent had more stock');
    }
  }

  const decrementQuantity = () => {
    if(quantity >= 2)
    setQuantity(quantity - 1);
  }

  const selectQuantity = () => {
    if(quantity >= 1){
      setButtonbuy(true)
    }
  }

  return(
    <>
    <div className='productSigle'>
    <img className='productImage' src={image} alt=''></img>
      <div className='productInfo'>
      <h1 className='productName'>{name}</h1>
      <p className='productPrice'>$ {price}</p>
      {buttonBuy === false ? (
      <ItemCount 
        count={quantity}
        increment={incrementQuantity}
        decrement={decrementQuantity}
        selectQuantity={selectQuantity}
      />
      ) : (
        <button className='addCart' onClick={() => addToCart(props, quantity)} >Finish Buy</button>
      )
      }
      </div>
    </div>
    <div className='newCategory'>
      <h2 className='newTitle'>Related Products</h2>
    </div>
    </>
  )
}