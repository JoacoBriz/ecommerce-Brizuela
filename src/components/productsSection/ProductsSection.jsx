import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../firabase/indexFirebase'
import './productsStyles.css'

export const ProductsSection = () => {
  const {category} = useParams()
  const [products, setProducts] = useState([])

  useEffect(
    () => {
      const getData = () => {
        const db = getFirestore()
        const itemCollection = db.collection('products')

        if(category){
          const itemCategory = itemCollection.where('category', '==', category)
          itemCategory.get().then(querySnapshot => {
            const itemsFiltered = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(itemsFiltered)
          })
        }
      }
      getData()
  }, [category])

  return(
    <main className='clothesPage'>
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
    </main>
  )
}