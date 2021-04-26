import './ProductStyles.css';
import { ItemCount } from './increment/ItemCount';
import { ProductList } from './ProductList';
import { useState } from 'react';
import { useEffect } from 'react';

export const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = (products) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(products)
      }, 3000)
    })
}

  useEffect(() => {
    getProducts(ProductList).then(result => {
        console.log(result)
        setProducts(result);
    });
  }, []);

  function buying (){
    alert(`Thanks for buy`);
  }

  return(
    <ul className='productList'>
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
  )
}