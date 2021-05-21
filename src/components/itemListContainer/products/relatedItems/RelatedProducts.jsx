import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFirestore } from '../../../../firabase/indexFirebase'

export const RelatedProducts = ({ props }) => {
  const [related, setRelated] = useState([])

  return(
    <ul className='productList'>
    {related.map((product) => 
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