
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Nosotros from './components/Nosotros';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto';
import CartProvider  from './context/CartContext';
import CheckOut from './components/CheckOut';
import Carrito from './components/Carrito';


function App() {


  return (

    <div>

      <BrowserRouter>

        <CartProvider>
          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            {/* <Route path='/item' element={<ItemDetailContainer id={2} />}></Route> */}
            <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
            {/* <Route path='/nosotros' element={<Nosotros />}></Route> */}
            <Route path='/productos' element={<ItemListContainer />}></Route>
            <Route path='/productos/:categoria' element={<ItemListContainer />}></Route>
            <Route path='/nosotros' element={<Nosotros />}></Route>
            <Route path='/contacto' element={<Contacto />}></Route>
            <Route path='/carrito' element={<Carrito />}></Route>
            <Route path='/checkout' element={<CheckOut />}></Route>
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div >

  )
}

export default App
