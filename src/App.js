import {NavBar} from './components/navbar/NavBar';
import {CarouselSlider} from './components/carousel/CarouselSlider';
import { Carousel } from './components/carousel/Carousel';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <CarouselSlider slides={Carousel}/>
      <ItemListContainer />
    </>
  );
}

export default App;