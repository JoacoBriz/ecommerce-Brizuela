import { ItemList } from '../itemListContainer/ItemList'
import './SneakersStyles.css'
import { Link } from 'react-router-dom'

export const SneakersSection = () => {
  const SneakersProducts = ItemList.filter(product => product.category === 'Sneakers')

  return(
    <main className='sneakersPage'>
      <ul className='productList'>
        {SneakersProducts.map((product) => 
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