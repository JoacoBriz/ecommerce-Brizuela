import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './footer.module.scss'

export const Footer = () => {
  return(
    <section className={styles.footer}>
    <div className={styles.legal}>
      <h3>The best store of Hypebeast</h3>
      <p>CLYDE © 2021</p>
    </div>
    <ul className={styles.links}>
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