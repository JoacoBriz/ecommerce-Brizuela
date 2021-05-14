import './mainStyles.css';
import { Link } from 'react-router-dom'

export const MainIndex = () => {
  return(
    <div className="welcome">
      <h1 className="principalTitle">Welcome</h1>
      <Link className="buttonClothing" to='/ClothesSection/clothes'>Clothing</Link>
    </div>
  )
}