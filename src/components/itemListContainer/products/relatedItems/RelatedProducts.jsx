import { ItemList } from '../../ItemList'
import { Link } from 'react-router-dom'

export const RelatedProducts = ({props}) => {
  return(
    <ul className='productList'>
    {ItemList.map((product) => 
        <li className='product'>
          <img src={props = product.image} alt=''></img>
          <h3>{props = product.name}</h3>
          <p>{`$ ${props = product.price}`}</p>
          <Link className='buttonBuy' to={`/ItemDetail/${props = product.id}`}>Buy</Link>
        </li>
    )}
  </ul>
  )
}