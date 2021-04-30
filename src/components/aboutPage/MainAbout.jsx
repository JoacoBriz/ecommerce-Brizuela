import './aboutStyles.css'
import GiorgioArmani from './imgAbout/giorgio.jpeg';
import Gucci from './imgAbout/gucci.jpg';
import Dior from './imgAbout/dior.png';
import Versace from './imgAbout/versace.jpeg';
import LouisVuitton from './imgAbout/LouisVuitton.jpg';
import Prada from './imgAbout/prada.jpg';

export const MainAbout = () => {
  return(
    <>
    <h1 className='aboutTitle'>Our Mission</h1>
    <p className='aboutDescription'>Clyde exists out of passion for design and excellence. As a company we focus on connecting clients with great designers and brands.</p>
    <section className='aboutUs'>
    <h2>About us</h2>
    <div className='galleryImage'>
      <div className='cardAbout'>
        <img src={GiorgioArmani} alt=""/>
        <p>CLYDE X Armani 2016</p>
      </div>
      <div className='cardAbout'>
        <img src={Gucci} alt=""/>
        <p>CLYDE X Gucci 2017</p>
      </div>
      <div className='cardAbout'>
        <img src={Dior} alt=""/>
        <p>CLYDE X Dior 2018</p>
      </div>
      <div className='cardAbout'>
        <img src={Versace} alt=""/>
        <p>CLYDE X Versace 2019</p>
      </div>
      <div className='cardAbout'>
        <img src={LouisVuitton} alt=""/>
        <p>CLYDE X Louis Vuitton 2020</p>
      </div>
      <div className='cardAbout'>
        <img src={Prada} alt=""/>
        <p>CLYDE X Prada 2021</p>
      </div>
    </div>
    </section>
    </>
  );
}