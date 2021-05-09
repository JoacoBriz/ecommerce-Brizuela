import { createContext } from 'react'

//Creo el contexto
export const CartContext = createContext([])

//Tengo que exportar el proveedor para que de info a los hijos, y para eso tiene que estar bien arriba en el proyecto 
//Entonces envolvemos la app completa para que pueda dar la info a todos los hijos
export const CartProvider = CartContext.Provider