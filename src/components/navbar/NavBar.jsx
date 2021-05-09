import './navBar.css'
import { NavLink } from 'react-router-dom';
import {CartContainer} from '../cart/CartContainer'


export const NavBar = () => {
  return(
    <div className="navBar">
      <NavLink className="nameShop" exact to='/'>CLYDE</NavLink>
      <ul className="navBarPages">
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/ClothesSection/clothes'>Products</NavLink>
        </li>
        <li> 
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/SneakersSection/sneakers'>Sneakers</NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' to='/MainAbout'>About</NavLink>
        </li>
        <li>
        <CartContainer />
        </li>
      </ul>
    </div>
  );
}