import { NavBar } from './components/navbar/NavBar';
import { CarouselSlider } from './components/carousel/CarouselSlider';
import { Carousel } from './components/carousel/Carousel';
import { MainIndex } from './components/main/MainIndex';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Footer } from './components/footer/Footer';
import { Newsletter } from './components/newsletter/Newsletter';
import { MainAbout } from './components/aboutPage/MainAbout'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetail } from './components/itemListContainer/products/ItemDetail';
import { ClothesSection } from './components/clothesPage/ClothesSection'
import { SneakersSection } from './components/sneakersPage/SneakersSection'

function App() {
  return (
    <BrowserRouter>
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
        <ItemDetail />
      </Route>

      <Route path='/ClothesSection'>
        <ClothesSection />
      </Route>

      <Route path='/SneakersSection'>
        <SneakersSection />
      </Route>

    </Switch>
    <Footer />
    </BrowserRouter>
  );
}

export default App;