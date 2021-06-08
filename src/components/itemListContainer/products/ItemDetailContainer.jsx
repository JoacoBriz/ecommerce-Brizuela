import { useParams } from 'react-router'
import { getFirestore } from '../../../firabase/indexFirebase'
import { ItemDetail } from './ItemDetail'
import { RelatedProducts } from './relatedItems/RelatedProducts'
import { useState, useEffect } from 'react'

export const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([])

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
  }, [productId])

  useEffect(() => {
    const db = getFirestore()
    const collection = db.collection('products')
    collection.get().then((querySnapshot) => {
      const itemsRelated = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
      const itemsRelatedFiltered = itemsRelated.filter(productRelated => productRelated.category === product.category && productRelated.id !== product.id)
      setRelatedProducts(itemsRelatedFiltered)
    })
  }, [product])
  
  return(
    <main>
      <ItemDetail 
        props={product}
        name={product.name}
        price={product.price}
        image={product.image}
      />
      <RelatedProducts 
        props={relatedProducts}
      />
    </main>
  )
}