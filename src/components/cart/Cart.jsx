import './cartStyles.css'
import { CartContext } from '../../context/CartContext'
import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const {cart, clearCart, removeFromCart, quantity} = useContext(CartContext)

  return(
    <main className='cart'>
      {cart.length > 0 ? (
        cart.map ((product) =>
            <div className='cartProduct'>
              <img className='cartImage' src={product.image} alt=""/>
              <div className='cartInformation'>
              <h2 className='cartName'>{product.name}</h2>
              <p className='cartPrice'>${product.price}</p>
              <p className='cartQuantity'>{quantity.length}</p>
              <button className='btnRemove ' onClick={() => removeFromCart(product.id)}>Delete</button>
              </div>
            </div>
        )
      ) : (
        <Fragment>
        <p className='cleanCart'>There are no products in your cart</p>
        <Link className='backToHome' to='/ClothesSection/clothes'>Back to Shop</Link>
        </Fragment>
      )}
      {cart.length > 0 ? (<button onClick={clearCart} className="btnClear">Clean Cart</button>) : (<p></p>)}
  </main>
  )
}

