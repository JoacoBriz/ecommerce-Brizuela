import { useParams } from 'react-router'
import { ItemList } from '../ItemList'
import { RelatedProducts } from './relatedItems/RelatedProducts'
import { ItemDetail } from './ItemDetail'
import { useState, useEffect } from 'react'

export const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  const [related, setRelated] = useState([])
  
  useEffect(() => {
    const productFind = ItemList.find((product) => product.id === productId)
    setProduct(productFind)

    const relatedFind = ItemList.filter((product) => product.category === productFind.category && product.id !== productFind.id)
    setRelated(relatedFind)
  }, [productId])

  return(
    <main>
      <ItemDetail 
        props={product}
        product={product}
      />

      <RelatedProducts
        props={related}
      />
    </main>
  )
}