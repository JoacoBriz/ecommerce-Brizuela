import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import styles from './cart.module.scss'

export const Cart = () => {
  const {cart, clearCart, removeFromCart} = useContext(CartContext)

  const sumTotal = cart => {
    let total = cart.reduce((t, product) => t += product.price*product.quantity, 0).toFixed(2);
    return total
}

  return(
    <main className={styles.cart}>
      {cart.length > 0 ? (
        cart.map ((product) =>
            <div className={styles.product}>
              <img className={styles.image} src={product.image} alt=""/>
              <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.price}>${product.price*product.quantity}</p>
                <p className={styles.quantity}>Quantity: {product.quantity}</p>
                <button className={styles.btnRemove} onClick={() => removeFromCart(product.id)}>Delete</button>
              </div>
            </div>
        )
      ) : (
        <div className={styles.cleanCart}>
          <p className={styles.title}>There are no products in your cart</p>
          <Link className={styles.backToShop} to='/ProductsSection/clothes'>Back to Shop</Link>
        </div>
      )}
      {cart.length > 0 ? (
        <div className={styles.infoCart}>
          <button onClick={clearCart} className={styles.btnClear}>Clean Cart</button>
          <p className={styles.finalPrice}>Total price: $ {sumTotal(cart)}</p>
          <Link className={styles.btnClear} to='/Checkout'>Go to Checkout</Link>
        </div>
        ) : (<p></p>)}
  </main>
  )
}

