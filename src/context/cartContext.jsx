import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()
export const CartProvider = CartContext.Provider

export const ShoppingCart = ( {children} ) => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  const addToCart = (item, quantity) => {
      const newCart = [...cart]
      const findItem = isInCart(item)

      if(findItem) {
          newCart[newCart.findIndex(prod => prod.id === item.id)].quantity++
          setCart(newCart)
          return
      }

      item.quantity = quantity
      newCart.push(item)
      setCart(newCart)
  }

  const isInCart = item => cart.find(product => product.id === item.id)

  useEffect(()=> {
    setQuantity(cart.length)
    console.log('cart => ',cart)
  }, [cart])

  const removeFromCart =(itemId) =>{
    const newCart = cart.filter(item => item.id !== itemId)
    setCart(newCart)
  }

  const clearCart =() => {setCart([])}


  return(
    <CartProvider value={{
    cart,
    quantity,
    clearCart,
    addToCart,
    removeFromCart}}>
      {children}
    </CartProvider>
  )
}