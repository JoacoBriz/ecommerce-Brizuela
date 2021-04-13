import React from 'react';
import '../App.css'

export default function NavBar(){
  return(
    <div className="navBar">
      <p className="nameShop">Streetwear</p>
      <ul className="navBarPages">
        <li>Home</li>
        <li>Clothing</li>
        <li>Sneakers</li>
        <li>About</li>
        <li>FAQ</li>
      </ul>
    </div>
  )
}