import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Cart } from './components/cart/Cart'
import { Checkout } from './components/cart/checkout/Checkout'
import { Footer } from './components/footer/Footer';
import { ItemDetailContainer } from './components/itemListContainer/products/ItemDetailContainer'
import { MainAbout } from './pages/about/MainAbout'
import { MainIndex } from './pages/main/MainIndex';
import { NavBar } from './components/navbar/NavBar';
import { Newsletter } from './components/newsletter/Newsletter';
import { ProductsSection } from './pages/productSection/ProductsSection'
import { ShoppingCart } from './context/CartContext'

export const Routes = () => {
  return(
    <ShoppingCart>
      <Router>
      <NavBar />
      <Switch>

        <Route exact path='/'>
          <MainIndex />
        </Route>

        <Route path='/Cart'>
          <Cart />
        </Route>

        <Route path='/MainAbout'>
          <MainAbout />
          <Newsletter />
        </Route>

        <Route path='/ItemDetailContainer/:productId'>
          <ItemDetailContainer />
        </Route>

        <Route path='/ProductsSection/:category'>
          <ProductsSection />
        </Route>

        <Route path='/Checkout'>
          <Checkout />
        </Route>

      </Switch>
      <Footer />
    </Router>
  </ShoppingCart>
  )
}