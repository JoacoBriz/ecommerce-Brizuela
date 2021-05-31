import './itemListStyles.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../firabase/indexFirebase'

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const collection = db.collection('products')
    collection.get().then((querySnapshot) => {
      const itemsFiltered = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
      setProducts(itemsFiltered)
    })
  }, [])

  return(
    <div className='productsContainer'>
      <div className='newCategory'>
        <h2 className='newTitle'>New Releases</h2>
        <p className='newDescription'>Collaborations and <span>exclusive</span> pieces</p>
      </div>
      <ul className='productList'>
      {products.map((product) => 
          <li className='product'>
          <img src={product.image} alt=''></img>
            <h3>{product.name}</h3>
            <p>{`$ ${product.price}`}</p>
            <Link className='buttonBuy' to={`/ItemDetailContainer/${product.id}`}>View More</Link>
          </li>
      )}
    </ul>
    </div>
  )
}