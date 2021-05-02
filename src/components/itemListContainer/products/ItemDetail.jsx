import { useParams } from 'react-router'
import { ItemList } from '../ItemList'
import { RelatedProducts } from './relatedItems/RelatedProducts'
import './ItemDetailStyles.css'
import { useState } from 'react'
import { useEffect } from 'react'

export const ItemDetail = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  const [related, setRelated] = useState([])

  useEffect(() => {
    const productFind = ItemList.find((product) => product.id === productId)
    setProduct(productFind)

    const relatedFind = ItemList.filter(product => product.category === productId)
    setRelated(relatedFind)
  }, [productId])

  return(
    <main>
    <div className='productSigle'>
    <img className='productImage' src={product.image} alt=''></img>
      <div className='productInfo'>
      <h1 className='productName'>{product.name}</h1>
      <div className='productSize'>
        <button className='size'>S</button>
        <button className='size'>M</button>
        <button className='size'>L</button>
        <button className='size'>XL</button>
      </div>
      <p className='productPrice'>$ {product.price}</p>
      <button className='addCart'>Buy</button>
      </div>
    </div>
    <div className='newCategory'>
      <h2 className='newTitle'>Related Products</h2>
    </div>
      <RelatedProducts props={related} />
    </main>
  )
}