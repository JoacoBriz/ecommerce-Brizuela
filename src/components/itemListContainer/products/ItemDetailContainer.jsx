import { useParams } from 'react-router'
// import { RelatedProducts } from './relatedItems/RelatedProducts'
import { ItemDetail } from './ItemDetail'
import { useState, useEffect } from 'react'
import { getFirestore } from '../../../firabase/indexFirebase'

export const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  // const [related, setRelated] = useState([])  
  
  useEffect(() => {
  if(productId) {
      const getProduct = async () => {
          const db = getFirestore();
          const itemCollection = await db.collection('products').doc(productId);
          const prod = await itemCollection.get();
          if(prod.exists) {
              setProduct({id: prod.id, ...prod.data()})
          } else {
              console.log('error')
          }
      }
    getProduct()
  }
  }, [productId])  
  
  return(
    <main>
      <ItemDetail 
        props={product}
        product={product}
      />      
      {/* <RelatedProducts
        props={related}
      /> */}
    </main>
  )
}