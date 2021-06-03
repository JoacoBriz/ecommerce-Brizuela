import './cartStyles.css'
import { CartContext } from '../../context/CartContext'
import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const {cart, clearCart, removeFromCart} = useContext(CartContext)

  const sumTotal = cart => {
    let total = cart.reduce((t, product) => t += product.price*product.quantity, 0).toFixed(2);
    return total
}

  return(
    <main className='cart'>
      {cart.length > 0 ? (
        cart.map ((product) =>
            <div className='cartProduct'>
              <img className='cartImage' src={product.image} alt=""/>
              <div className='cartInformation'>
                <h2 className='cartName'>{product.name}</h2>
                <p className='cartPrice'>${product.price*product.quantity}</p>
                <p className='cartPrice'>Quantity: {product.quantity}</p>
                <button className='btnRemove' onClick={() => removeFromCart(product.id)}>Delete</button>
              </div>
            </div>
        )
      ) : (
        <Fragment>
          <p className='cleanCart'>There are no products in your cart</p>
          <Link className='backToShop' to='/ProductsSection/clothes'>Back to Shop</Link>
        </Fragment>
      )}
      {cart.length > 0 ? (
        <div className='infoContainer'>
          <button onClick={clearCart} className="btnClear">Clean Cart</button>
          <p className='finalPrice'>Total price: $ {sumTotal(cart)}</p>
          <Link className="btnClear" to='/Checkout'>Go to Checkout</Link>
        </div>
        ) : (<p></p>)}
  </main>
  )
}

