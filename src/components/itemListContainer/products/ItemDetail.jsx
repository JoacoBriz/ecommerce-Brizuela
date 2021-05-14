import './ItemDetailStyles.css'
import { ItemCount } from './increment/ItemCount'
import { useState, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const ItemDetail = ({ props, product }) => {
  const [stockQuantity, setStockQuantity] = useState(0);
  const [buttonBuy, setButtonbuy] = useState(false);

  const incrementQuantity = () => {
    if(stockQuantity <= 4){
      setStockQuantity(stockQuantity + 1);
    } else {
      alert('I havent had more stock');
    }
  }

  const decrementQuantity = () => {
    if(stockQuantity >= 2)
    setStockQuantity(stockQuantity - 1);
  }

  const selectQuantity = () => {
    if(stockQuantity >= 1){
      setButtonbuy(true)
    }
  }

  const { addToCart } = useContext (CartContext) 

  return(
    <>
    <div className='productSigle'>
    <img className='productImage' src={props.image} alt=''></img>
      <div className='productInfo'>
      <h1 className='productName'>{props.name}</h1>
      <p className='productPrice'>$ {props.price}</p>
      {buttonBuy === false ? (
      <ItemCount 
        count={stockQuantity} 
        increment={incrementQuantity} 
        decrement={decrementQuantity}
        selectQuantity={selectQuantity}
      />
      ) : (
        <button className='addCart' onClick={() => addToCart(product)}>Finish Buy</button>
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