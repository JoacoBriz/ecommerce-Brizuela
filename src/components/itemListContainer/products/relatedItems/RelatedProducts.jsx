import styles from './related.module.scss'
import { Link } from 'react-router-dom'

export const RelatedProducts = ({ props }) => {
  return(
    <ul className={styles.list}>
    {props.map((product) => 
        <li className={styles.product}>
          <img src={product.image} alt=''></img>
          <h3>{product.name}</h3>
          <p>{`$ ${product.price}`}</p>
          <Link className={styles.btnBuy} to={`/ItemDetailContainer/${product.id}`}>View More</Link>
        </li>
    )}
  </ul>
  )
}