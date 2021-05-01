import { useParams } from 'react-router'
import { ItemList } from '../ItemList'
import './ItemDetailStyles.css'

export const ItemDetail = () => {
  const { productId } = useParams()

  function getProduct (productId) {
    const productFilter = ItemList.find((product) => product.id === productId)
    return productFilter
  }
  
  return(
    <main>
      <img className='productImage' src={getProduct(productId).image} alt=''></img>
      <div className='productInfo'>
      <h1 className='productName'>{getProduct(productId).name}</h1>
      <div className='productSize'>
        <button className='size'>S</button>
        <button className='size'>M</button>
        <button className='size'>L</button>
        <button className='size'>XL</button>
      </div>
      <p className='productPrice'>{getProduct(productId).price}</p>
      <button className='addCart'>Buy</button>
      </div>
    </main>
  )
}