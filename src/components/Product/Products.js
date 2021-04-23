import './ProductStyles.css';
import { ItemCount } from './increment/ItemCount';
import SupremeSweatshirt from './img/supreme.jpg';
import BalenciagaHoodie from './img/balenciagahoodie.jpg';
import CommeDesGarçonsPlayPolo from './img/CommeDesGarçonsPlay.jpg';
import PoloRalphLauren from './img/PoloRalphLauren.jpg';
import TheNorthFacexSupreme from './img/TheNorthFacexSupreme.jpg';

export const Products = () => {
  const products =  [
    {
      id: '1',
      image: SupremeSweatshirt,
      name:'Sweatshirt Supreme',
      price:'$ 1,320'
    },
    {
      id: '2',
      image: BalenciagaHoodie,
      name: 'Hoodie Balenciaga',
      price: '$ 895'
    },
    {
      id: '3',
      image: CommeDesGarçonsPlayPolo,
      name: 'Comme Des Garçons Play',
      price: '$ 152'
    },
    {
      id: '4',
      image: PoloRalphLauren,
      name: 'Polo Ralph Lauren',
      price: '$ 864'
    },
    {
      id: '5',
      image: TheNorthFacexSupreme,
      name: 'The North Face X Supreme',
      price: '$ 2,231'
    }
  ]
  function buying (){
    alert(`Thanks for buy`);
  }
  return(
    <div className='productsContainer'>
      <div className='newCategory'>
        <h2 className='newTitle'>New Releases</h2>
        <p className='newDescription'>Collaborations and <span>exclusive</span> pieces</p>
      </div>
      <ul>
        {products.map((product) => 
            <li className='product'>
            <img src={product.image} alt=''></img>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <ItemCount />
              <button onClick={buying} className='buttonBuy'>Buy</button>
            </li>
        )}
      </ul>
    </div>
  )
}