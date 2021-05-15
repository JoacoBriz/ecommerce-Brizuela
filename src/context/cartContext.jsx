import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = CartContext.Provider

export const ShoppingCart = ( {children} ) => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  useEffect( () => {
      setQuantity(cart.length)
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