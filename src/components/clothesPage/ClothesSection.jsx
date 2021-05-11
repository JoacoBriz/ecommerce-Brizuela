import { ItemList } from '../itemListContainer/ItemList'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import './clothesPageStyles.css'

export const ClothesSection = () => {
  let { categoryId } = useParams()
  const [clothes, setClothes] = useState([]);


  useEffect(() => {
      let filterProducts = ItemList.filter((product) => product.category.toLowerCase() === categoryId)
      setClothes(filterProducts)
  }, [categoryId]);


  return(
    <main className='clothesPage'>
      <ul className='productList'>
        {clothes.map((product) => 
          <li className='product'>
            <img src={product?.image} alt=''></img>
            <h3>{product?.name}</h3>
            <p>$ {product?.price}</p>
            <Link className='buttonBuy' to={`/ItemDetail/${product?.id}`}>Buy</Link>
          </li>
        )}
      </ul>
    </main>
  )
}