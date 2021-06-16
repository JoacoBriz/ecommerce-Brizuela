import styles from './newsletter.module.scss';

export const Newsletter = () => {
  function suscribeNewsletter () {
    alert('Thanks for suscribe in us Newsletter!');
  }
  return(
    <div className={styles.newsletter}>
      <h3 className={styles.title}>Newsletter</h3>
      <p className={styles.subtitle}>Suscribe in us newsletter for receive more offers</p>
      <div className={styles.dataUser}>
      <input type="radio" name="" id=""/>
      <label htmlFor="">Clothes of Men</label>
      <input type="radio" name="" id=""/>
      <label htmlFor="">Clothes of Women</label>
      </div>
      <input className={styles.email} type="email" placeholder='Email'/>
      <button className={styles.btnSend} onClick={suscribeNewsletter}>Suscribe</button>
    </div>
  )
}
