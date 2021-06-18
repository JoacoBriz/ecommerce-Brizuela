
import styles from './navbar.module.scss'
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {useContext} from 'react'


export const NavBar = () => {
  const { quantity } = useContext (CartContext)

  return(
    <div className={styles.navbar}>
      <NavLink className={styles.nameShop} exact to='/ecommerce-clyde'>CLYDE</NavLink>
      <ul className={styles.navBarPages}>
        <li>
          <NavLink activeClassName={styles.activeNavlink} className={styles.navlink} exact to='/ecommerce-clyde'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.activeNavlink} className={styles.navlink} exact to='/ProductsSection/clothes'>Clothes</NavLink>
        </li>
        <li> 
          <NavLink activeClassName={styles.activeNavlink} className={styles.navlink} exact to='/ProductsSection/sneakers'>Sneakers</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.activeNavlink} className={styles.navlink} to='/MainAbout'>About</NavLink>
        </li>
        <li>
        <NavLink activeClassName={styles.activeNavlink} className={styles.navlink} to='/Cart'>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
          <p className={styles.cartQuantityAll}><span>{quantity}</span></p>
        </NavLink>
        </li>
      </ul>
    </div>
  );
}