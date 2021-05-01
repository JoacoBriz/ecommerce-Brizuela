import './itemListStyles.css';
import { ItemCount } from './increment/ItemCount';
import { ItemList } from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const getProducts = (products) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(products)
      }, 1000)
    })
}

  useEffect(() => {
    getProducts(ItemList).then(result => {
      setProducts(result);
    });
  }, []);
  return(
    <div className='productsContainer'>
      <div className='newCategory'>
        <h2 className='newTitle'>New Releases</h2>
        <p className='newDescription'>Collaborations and <span>exclusive</span> pieces</p>
      </div>
      <ul className='productList'>
      {products.map((product) => 
          <li className='product'>
          <img src={product.image} alt=''></img>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <ItemCount />
            <Link className='buttonBuy' to={`/ItemDetail/${product.id}`}>Buy</Link>
          </li>
      )}
    </ul>
    </div>
  )
}