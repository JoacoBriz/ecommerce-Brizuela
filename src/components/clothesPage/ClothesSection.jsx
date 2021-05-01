import { ItemList } from '../itemListContainer/ItemList'
import { Link } from 'react-router-dom'
import './clothesPageStyles.css'

export const ClothesSection = () => {
  const ClothesProducts = ItemList.filter(product => product.category === 'Clothes')

  return(
    <main className='clothesPage'>
      <ul className='productList'>
        {ClothesProducts.map((product) => 
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