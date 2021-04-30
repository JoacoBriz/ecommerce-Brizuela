import './ProductStyles.css';
import { ItemCount } from './increment/ItemCount';
import { ItemList } from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Item = () => {
  const [products, setProducts] = useState([]);

  const getProducts = (products) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(products)
      }, 3000)
    })
}

  useEffect(() => {
    getProducts(ItemList).then(result => {
      setProducts(result);
    });
  }, []);

  return(
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
  )
}