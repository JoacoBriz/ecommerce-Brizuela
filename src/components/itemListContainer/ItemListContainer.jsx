import { getFirestore } from '../../firabase/indexFirebase'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './itemList.module.scss'

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
    <div className={styles.products}>
      <div className={styles.category}>
        <h2 className={styles.title}>New Releases</h2>
        <p className={styles.description} >Collaborations and <span>exclusive</span> pieces</p>
      </div>
      <ul className={styles.list}>
      {products.map((product) => 
          <li className={styles.product} >
          <img src={product.image} alt=''></img>
            <h3>{product.name}</h3>
            <p>{`$ ${product.price}`}</p>
            <Link className={styles.btnBuy} to={`/ItemDetailContainer/${product.id}`}>View More</Link>
          </li>
      )}
    </ul>
    </div>
  )
}