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

function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path='/'>
        <NavBar />
        <MainIndex />
        <CarouselSlider slides={Carousel}/>
        <ItemListContainer />
        <Newsletter />
        <Footer />
      </Route>

      <Route path='/MainAbout'>
        <NavBar />
        <MainAbout />
        <Newsletter />
        <Footer />
      </Route>

      <Route path='/ItemDetail/:productId'>
        <NavBar />
        <ItemDetail />
        <Footer />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;