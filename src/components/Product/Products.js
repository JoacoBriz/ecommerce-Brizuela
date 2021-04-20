import './ProductStyles.css';

export const Products = () => {
  const products =  [
    {
      image:'img.jpg',
      name:'Product 1',
      price:'2021'
    },
    {
      image:'img.jpg',
      name: 'Product 2',
      price: '2022'
    },
    {
      image:'img.jpg',
      name: 'Product 2',
      price: '2022'
    },
    {
      image:'img.jpg',
      name: 'Product 2',
      price: '2022'
    },
    {
      image:'img.jpg',
      name: 'Product 2',
      price: '2022'
    }
  ]
  return(
    <div className='productsContainer'>
    <ul>
      {products.map((product) => 
          <li className='product'>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Buy</button>
          </li>
      )}
    </ul>
    </div>
  )
}