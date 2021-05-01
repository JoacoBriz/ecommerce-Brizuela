import './navBar.css'
import { NavLink } from 'react-router-dom';
import {CardWidget} from '../cardWidget/CardWidget'


export const NavBar = () => {
  return(
    <div className="navBar">
      <NavLink className="nameShop" exact to='/'>CLYDE</NavLink>
      <ul className="navBarPages">
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/ClothesSection'>Clothing</NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' exact to='/SneakersSection'>Sneakers</NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNavlink' className='navLink' to='/MainAbout'>About</NavLink>
        </li>
        {/* <li>
        <NavLink activeClassName='activeNavlink' className='navLink'>FAQ</NavLink>
        </li> */}
        <li>
        <CardWidget />
        </li>
      </ul>
    </div>
  );
}