import './Product.css';

export const ProductDesign = (props) => {
  return(
    <div className="product">
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <button>Buy</button>
    </div>
  )
}