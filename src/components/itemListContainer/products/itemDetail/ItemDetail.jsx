import styles from './itemDetail.module.scss'
import { CartContext } from '../../../../context/CartContext';
import { ItemCount } from '../increment/ItemCount'
import { useState, useContext } from 'react';

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
    <div className={styles.product}>
    <img className={styles.image} src={image} alt=''></img>
      <div className={styles.info}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.price}>$ {price}</p>
      {buttonBuy === false ? (
      <ItemCount 
        count={quantity}
        increment={incrementQuantity}
        decrement={decrementQuantity}
        selectQuantity={selectQuantity}
      />
      ) : (
        <button className={styles.addToCart} onClick={() => addToCart(props, quantity)} >Finish Buy</button>
      )
      }
      </div>
    </div>
    <div className={styles.category}>
      <h2 className={styles.title}>Related Products</h2>
    </div>
    </>
  )
}