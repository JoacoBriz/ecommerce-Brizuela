import { Link } from 'react-router-dom'

export const RelatedProducts = ({ props }) => {
  return(
    <ul className='productList'>
    {props.map((product) => 
        <li className='product'>
          <img src={product.image} alt=''></img>
          <h3>{product.name}</h3>
          <p>{`$ ${product.price}`}</p>
          <Link className='buttonBuy' to={`/ItemDetailContainer/${product.id}`}>View More</Link>
        </li>
    )}
  </ul>
  )
}