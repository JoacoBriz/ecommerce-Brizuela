import './navBar.css';
import {CardWidget} from '../cardWidget/CardWidget';


export const NavBar = () => {
  return(
    <div className="navBar">
      <p className="nameShop">CLYDE</p>
      <ul className="navBarPages">
        <li>Home</li>
        <li>Clothing</li>
        <li>Sneakers</li>
        <li>About</li>
        <li>FAQ</li>
        <li>
        <CardWidget />
        </li>
      </ul>
    </div>
  );
}