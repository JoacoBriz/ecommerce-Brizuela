import { useParams } from 'react-router'
import { getFirestore } from '../../../firabase/indexFirebase'
import { ItemDetail } from './ItemDetail'
import { useState, useEffect } from 'react'

export const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        const db = getFirestore()
        const itemCollection = await db.collection('products').doc(productId)
        const prod = await itemCollection.get()
        if (prod.exists) {
          setProduct({ id: prod.id, ...prod.data() })
        } else {
          console.log('error')
        }
      }
      getProduct()
    }
    console.log('productId => ', productId)
  }, [productId])
  
  return(
    <main>
      <ItemDetail 
        props={product}
      />      
    </main>
  )
}