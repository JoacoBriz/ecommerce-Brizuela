import {NavBar} from './components/navbar/NavBar';
import {CarouselSlider} from './components/carousel/CarouselSlider';
import { Carousel } from './components/carousel/Carousel';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';
import {Products} from './components/Product/Products';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <CarouselSlider slides={Carousel}/>
      <Products />
    </>
  );
}

export default App;