import { NavBar } from './components/navbar/NavBar';
import { CarouselSlider } from './components/carousel/CarouselSlider';
import { Carousel } from './components/carousel/Carousel';
import { MainIndex } from './components/main/MainIndex';
import { ItemListContainer } from './components/itemList/ItemListContainer';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <MainIndex />
      <CarouselSlider slides={Carousel}/>
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;