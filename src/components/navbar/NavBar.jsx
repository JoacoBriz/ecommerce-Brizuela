import './navBar.css'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {useContext} from 'react'


export const NavBar = () => {
  const { quantity } = useContext (CartContext)

  return(
    <div className="navBar">
      <NavLink className="nameShop" exact to='/'>CLYDE</NavLink>
      <ul className="navBarPages">
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/ProductsSection/clothes'>Clothes</NavLink>
        </li>
        <li> 
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/ProductsSection/sneakers'>Sneakers</NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' to='/MainAbout'>About</NavLink>
        </li>
        <li>
        <NavLink activeClassName='activeNavlink' className='navLink' to='/Cart'>
          <FontAwesomeIcon icon={faShoppingCart} className='cartIcon'/>
          <p className="cartQuantityAll"><span>{quantity}</span></p>
        </NavLink>
        </li>
      </ul>
    </div>
  );
}