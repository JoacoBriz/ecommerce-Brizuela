import './checkoutStyles.css'
import { useState, useEffect, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../../firabase/indexFirebase'
import { CartContext } from '../../../context/CartContext'

export const Checkout = () => {
  const {cart, clearCart} = useContext(CartContext)
  const [cartEmpty, setCartEmpty] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [dataBuyer, setDataBuyer] = useState(
    {
      name: '',
      email: '',
      phone: ''
    }
  )

  useEffect(() => {
    const newDisableButton = [dataBuyer.name, dataBuyer.phone, dataBuyer.email].includes('')
    setIsDisabled(newDisableButton)
  }, [dataBuyer])
  
  const sumTotal = cart => {
    let total = cart.reduce((t, product) => t += product.price*product.quantity, 0).toFixed(2)
    return total
  }

  const handleChange = e => {
    setDataBuyer({
        ...dataBuyer,
        [e.target.name]: e.target.value
    })
  }

  const updateStock = () => {
    const db = getFirestore()
    const batch = db.batch()

    cart.forEach((product) => {
      const productRef = db.collection('products').doc(product.id)
      batch.update(productRef, {stock: product.stock - product.quantity})
    })
    batch.commit()
  }

  const buyOrder = () => {
    updateStock()
    clearCart()
    const db = getFirestore()
    const orders = db.collection('orders')
    const newOrder = {
      buyer: dataBuyer,
      products: cart.map(product => ( {id: product.id, name: product.name, price: product.price * product.quantity} )),
      totalPrice: sumTotal(cart)
    }
    orders.add(newOrder)
    setCartEmpty(true)
    alert(`Thanks for buy ${dataBuyer.name}`)
  }

  return(
    <main className='checkoutMain'>
      {cartEmpty ? (
        <Link className='finishBuy' to='/'>Back to Home</Link>
      ) : (
        <Fragment>
        <h1 className='checkoutTitle'>CheckOut</h1>
        <form className='checkout'>
          <input onChange={handleChange} value={dataBuyer.name} name='name' type="text" placeholder='Name' />
          <input onChange={handleChange} value={dataBuyer.email} name='email' type="text" placeholder='Email' />
          <input onChange={handleChange} value={dataBuyer.phone} name='phone' type="text" placeholder='Phone' />
        </form>
        <button disabled={isDisabled} onClick={buyOrder} className='finishBuy'>Finish Buy</button>
        </Fragment>
      )}
    </main>
  )
}