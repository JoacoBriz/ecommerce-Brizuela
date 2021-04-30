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
      <h2 className='productPrice'>{getProduct(productId).price}</h2>
      <button className='addCart'>Buy</button>
      </div>
    </main>
  )
}