import './ItemDetailStyles.css'

export const ItemDetail = ({ props }) => {
  return(
    <>
    <div className='productSigle'>
    <img className='productImage' src={props.image} alt=''></img>
      <div className='productInfo'>
      <h1 className='productName'>{props.name}</h1>
      <div className='productSize'>
        <button className='size'>S</button>
        <button className='size'>M</button>
        <button className='size'>L</button>
        <button className='size'>XL</button>
      </div>
      <p className='productPrice'>$ {props.price}</p>
      <button className='addCart'>Buy</button>
      </div>
    </div>
    <div className='newCategory'>
      <h2 className='newTitle'>Related Products</h2>
    </div>
    </>
  )
}