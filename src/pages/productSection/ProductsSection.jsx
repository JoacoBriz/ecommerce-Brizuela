import { getFirestore } from '../../firabase/indexFirebase'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import styles from './product.module.scss'

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
    <main className={styles.products}>
      <ul className={styles.list}>
      {products.map((product) =>
        <li className={styles.product}>
          <img src={product.image} alt=''></img>
          <h3>{product.name}</h3>
          <p>{`$ ${product.price}`}</p>
          <Link className={styles.btnBuy} to={`/ItemDetailContainer/${product.id}`}>View More</Link>
        </li>
      )}
      </ul>
    </main>
  )
}