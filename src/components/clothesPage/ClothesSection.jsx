import { ItemList } from '../itemListContainer/ItemList'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import './clothesPageStyles.css'

export const ClothesSection = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const ClothesProducts = ItemList.filter(product => product.category === 'Clothes')
    setClothes(ClothesProducts);
  }, [clothes]);

  return(
    <main className='clothesPage'>
      <ul className='productList'>
        {clothes.map((product) => 
          <li className='product'>
            <img src={product.image} alt=''></img>
            <h3>{product.name}</h3>
            <p>{`$ ${product.price}`}</p>
            <Link className='buttonBuy' to={`/ItemDetail/${product.id}`}>Buy</Link>
          </li>
        )}
      </ul>
    </main>
  )
} 