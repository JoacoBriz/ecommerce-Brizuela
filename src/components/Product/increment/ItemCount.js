import { useState } from 'react';
import './increment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const ItemCount = () => {
  const [stockQuantity, setStockQuantity] = useState(1);

  const incrementQuantity = () => {
    if(stockQuantity <= 4){
      setStockQuantity(stockQuantity + 1);
    } else {
      alert('I havent more stock');
    }
  }

  const decrementQuantity = () => {
    setStockQuantity(stockQuantity - 1);
  }

  return(
    <div className='stockDiv'>
      <FontAwesomeIcon icon={faMinus} className='decrementButton' onClick={decrementQuantity} />
      <p className='quantity'>{stockQuantity}</p>
      <FontAwesomeIcon icon={faPlus} className='incrementButton' onClick={incrementQuantity} />
    </div>
  )
}