import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';

export const CardWidget = () => {
  function push (){
    alert("Este es tu Carrito");
  }
  return(
    <FontAwesomeIcon onClick={push} icon={faShoppingBag} />
  );
}