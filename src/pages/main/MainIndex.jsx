import { Carousel } from '../../components/carousel/Carousel'
import { CarouselSlider } from '../../components/carousel/CarouselSlider'
import { ItemListContainer } from '../../components/itemListContainer/ItemListContainer'
import { Link } from 'react-router-dom'
import { Newsletter } from '../../components/newsletter/Newsletter'
import styles from './main.module.scss';

export const MainIndex = () => {
  return(
    <>
      <div className={styles.welcome}>
        <h1 className={styles.title}>Welcome</h1>
        <Link className={styles.buttonClothing} to='/ProductsSection/clothes'>Clothing</Link>
      </div>
      <CarouselSlider slides={Carousel}/>
      <ItemListContainer />
      <Newsletter />
    </>
  )
}