import './checkoutStyles.css'
import { useState, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../../firabase/indexFirebase'
import { CartContext } from '../../../context/CartContext'

export const Checkout = () => {
  const {cart, clearCart} = useContext(CartContext)
  const [cartEmpty, setCartEmpty] = useState(false)

  const sumTotal = cart => {
    let total = cart.reduce((t, product) => t += product.price*product.quantity, 0).toFixed(2)
    return total
  }

  const [dataBuyer, setDataBuyer] = useState(
    {
      name: '',
      email: '',
      phone: ''
    }
  )

  const handleChange = e => {
    setDataBuyer({
        ...dataBuyer,
        [e.target.name]: e.target.value
    })
  }

  //Todavia no me salio actualizar el stock 😅

  // const updateStock = () => {
  //   const db = getFirestore()
  //   const batch = db.batch()

  //   cart.forEach((product) => {
  //     const productRef = db.collection('products').doc(product)
  //     batch.update(productRef, {stock: product.stock - product.quantity})
  //   })
  //   batch.commit()
  // }

  const buyOrder = () => {
    // updateStock()
    clearCart()
    const db = getFirestore()
    const orders = db.collection('orders')
    const newOrder = {
      buyer: dataBuyer,
      products: cart,
      totalPrice: sumTotal(cart)
    }
    orders.add(newOrder)
    setCartEmpty(true)
    alert(`Thanks for buy ${dataBuyer.name}`)
  }

  return(
    <main className='checkoutMain'>
    {cartEmpty ? (
      <Link className='finishBuy' to='/ProductsSection'>Back to Shop</Link>
    ) : (
      <Fragment>
      <h1 className='checkoutTitle'>CheckOut</h1>
      <form className='checkout'>
        <input onChange={handleChange} value={dataBuyer.name} name='name' type="text" placeholder='Name' />
        <input onChange={handleChange} value={dataBuyer.email} name='email' type="text" placeholder='Email' />
        <input onChange={handleChange} value={dataBuyer.phone} name='phone' type="text" placeholder='Phone' />
      </form>
      <button onClick={buyOrder} className='finishBuy'>Finish Buy</button>
      </Fragment>
    )}

    </main>
  )
}