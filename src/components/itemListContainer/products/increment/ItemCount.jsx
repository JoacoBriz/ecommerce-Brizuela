import './increment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const ItemCount = ({decrement, increment, count, onAdd}) => {
  return(
    <div>
    <div className='stockDiv' >
    <FontAwesomeIcon icon={faMinus} className='decrementButton' onClick={decrement} />
      <p className='quantity'>{count}</p>
      <FontAwesomeIcon icon={faPlus} className='incrementButton' onClick={increment} />
    </div>
      <button className='addCart' onClick={onAdd} >Add {count} to cart</button>
    </div>
  )
}