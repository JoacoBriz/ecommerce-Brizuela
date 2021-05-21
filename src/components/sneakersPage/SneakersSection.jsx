import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../firabase/indexFirebase'
import './sneakersStyles.css'

export const SneakersSection = () => {
  const [sneakers, setSneakers] = useState([])
  const [emptyCategory, setEmptyCategory] = useState(false)

  useEffect(
    () => {
          const db = getFirestore()
          const itemCollection = db.collection('products')
          const itemPerCategory = itemCollection.where('category', '==', 'sneakers')
          itemPerCategory.get().then(
            (querySnapshot) => {
              if(querySnapshot.size === 0) {
                setEmptyCategory(true)
              }
              const result = (querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
              setSneakers(result)
          })
  })

  return(
    <main className='sneakersPage'>
        <ul className='productList'>
          {emptyCategory ? (
            <p className='emptyCategory'>This category is empty</p>
          ) :(
            sneakers.map((product) =>
            <li className='product'>
              <img src={product.image} alt=''></img>
              <h3>{product.name}</h3>
              <p>{`$ ${product.price}`}</p>
              <Link className='buttonBuy' to={`/ItemDetailContainer/${product.id}`}>View More</Link>
            </li>
          )
          )}
        </ul>
    </main>
  )
} 