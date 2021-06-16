import styles from './about.module.scss'
import Dior from './imgAbout/dior.png';
import GiorgioArmani from './imgAbout/giorgio.jpeg';
import Gucci from './imgAbout/gucci.jpg';
import LouisVuitton from './imgAbout/LouisVuitton.jpg';
import Prada from './imgAbout/prada.jpg';
import Versace from './imgAbout/versace.jpeg';

export const MainAbout = () => {
  return(
    <section>
    <h1 className={styles.title}>Our Mission</h1>
    <p className={styles.description}>Clyde exists out of passion for design and excellence. As a company we focus on connecting clients with great designers and brands.</p>
    <section className={styles.aboutUs}>
    <h2 className={styles.subtitle}>About us</h2>
    <div className={styles.gallery}>
      <div className={styles.card}>
        <img src={GiorgioArmani} alt=""/>
        <p>CLYDE X Armani 2016</p>
      </div>
      <div className={styles.card}>
        <img src={Gucci} alt=""/>
        <p>CLYDE X Gucci 2017</p>
      </div>
      <div className={styles.card}>
        <img src={Dior} alt=""/>
        <p>CLYDE X Dior 2018</p>
      </div>
      <div className={styles.card}>
        <img src={Versace} alt=""/>
        <p>CLYDE X Versace 2019</p>
      </div>
      <div className={styles.card}>
        <img src={LouisVuitton} alt=""/>
        <p>CLYDE X Louis Vuitton 2020</p>
      </div>
      <div className={styles.card}>
        <img src={Prada} alt=""/>
        <p>CLYDE X Prada 2021</p>
      </div>
    </div>
    </section>
    </section>
  );
}