import { ItemList } from '../../ItemList'
import { Link } from 'react-router-dom'

export const RelatedProducts = () => {
  return(
    <ul className='productList'>
    {ItemList.map((product) => 
        <li className='product'>
        <img src={product.image} alt=''></img>
          <h3>{product.name}</h3>
          <p>{`$ ${product.price}`}</p>
          <Link className='buttonBuy' to={`/ItemDetail/${product.id}`}>Buy</Link>
        </li>
    )}
  </ul>
  )
}