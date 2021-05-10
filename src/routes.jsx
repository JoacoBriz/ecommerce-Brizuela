import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Carousel } from './components/carousel/Carousel';
import { CarouselSlider } from './components/carousel/CarouselSlider';
import { ClothesSection } from './components/clothesPage/ClothesSection'
import { Footer } from './components/footer/Footer';
import { ItemDetailContainer } from './components/itemListContainer/products/ItemDetailContainer'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { MainAbout } from './components/aboutPage/MainAbout'
import { MainIndex } from './components/main/MainIndex';
import { NavBar } from './components/navbar/NavBar';
import { Newsletter } from './components/newsletter/Newsletter';
import { SneakersSection } from './components/sneakersPage/SneakersSection'
import { ShoppingCart } from './context/cartContext'

export const Routes = () => {
  return(
    <ShoppingCart>
      <Router>
      <NavBar />
      <Switch>

        <Route exact path='/'>
          <MainIndex />
          <CarouselSlider slides={Carousel}/>
          <ItemListContainer />
          <Newsletter />
        </Route>

        <Route path='/MainAbout'>
          <MainAbout />
          <Newsletter />
        </Route>

        <Route path='/ItemDetail/:productId'>
          <ItemDetailContainer />
        </Route>

        <Route path='/ClothesSection/:categoryId'>
          <ClothesSection />
        </Route>

        <Route path='/SneakersSection/:categoryId'>
          <SneakersSection />
        </Route>

        <Route path='/cart'>
          <SneakersSection />
        </Route>

      </Switch>
      <Footer />
    </Router>
  </ShoppingCart>
  )
}