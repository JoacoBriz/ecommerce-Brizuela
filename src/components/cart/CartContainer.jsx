import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';

export const CartContainer = () => {
  function push (){
    alert("This is your Cart");
  }
  return(
    <FontAwesomeIcon onClick={push} icon={faShoppingBag} />
  );
}