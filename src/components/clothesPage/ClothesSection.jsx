import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFirestore } from '../../firabase/indexFirebase'
import './clothesStyles.css'

export const ClothesSection = () => {
  const [clothes, setClothes] = useState([])
  const [emptyCategory, setEmptyCategory] = useState(false)

useEffect(
  () => {
    const db = getFirestore()
    const itemCollection = db.collection('products')
    const itemPerCategory = itemCollection.where('category', '==', 'clothes')
    itemPerCategory.get().then(
      (querySnapshot) => {
        if(querySnapshot.size === 0) {
          setEmptyCategory(true)
        }
        const result = (querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        setClothes(result)
      }
    )
    console.log('clothes section => ', clothes)
}, [clothes])

  return(
    <main className='clothesPage'>
      <ul className='productList'>
        {emptyCategory ? (
          <p className='emptyCategory'>This category is empty</p>
        ) : (
          clothes.map((product) => 
          <li className='product'>
            <img src={product.image} alt=''></img>
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
            <Link className='buttonBuy' to={`/ItemDetailContainer/${product.id}`}>View More</Link>
          </li>
        )
        )}
      </ul>
    </main>
  )
}