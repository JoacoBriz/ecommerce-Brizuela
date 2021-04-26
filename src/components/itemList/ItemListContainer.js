import './itemListStyles.css';
import { Product } from './products/Product';

export const ItemListContainer = () => {
  return(
    <div className='productsContainer'>
      <div className='newCategory'>
        <h2 className='newTitle'>New Releases</h2>
        <p className='newDescription'>Collaborations and <span>exclusive</span> pieces</p>
      </div>
      <Product />
    </div>
  )
}