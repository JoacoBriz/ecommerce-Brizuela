import styles from './itemCount.module.scss';
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

export const ItemCount = ({decrement, increment, count, selectQuantity}) => {
  return(
    <section>
    <div className={styles.stock}>
    <FontAwesomeIcon icon={faMinus} className={styles.decrementBtn} onClick={decrement} />
      <p className={styles.quantity}>{count}</p>
      <FontAwesomeIcon icon={faPlus} className={styles.incrementBtn} onClick={increment} />
    </div>
      <button className={styles.addToCart} onClick={selectQuantity} >Add {count} to cart</button>
    </section>
  )
}