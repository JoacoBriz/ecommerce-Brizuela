import './footerStyles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return(
    <section className='footerContainer'>
    <div className='legalData'>
      <h3>The best store of Hypebeast</h3>
      <p>CLYDE © 2021</p>
    </div>
    <ul className='socialMediaLinks'>
      <li>
        <FontAwesomeIcon icon={faInstagram}/>
      </li>
      <li>
        <FontAwesomeIcon icon={faTwitter}/>
      </li>
      <li>
      <FontAwesomeIcon icon={faFacebook}/>
      </li>
    </ul>
    </section>
  )
}