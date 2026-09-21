
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Nosotros from './components/Nosotros';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        {/* <Route path='/item' element={<ItemDetailContainer id={2} />}></Route> */}
        <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
        {/* <Route path='/nosotros' element={<Nosotros />}></Route> */}
        <Route path='/productos' element={<ItemListContainer />}></Route>
        <Route path='/productos/:categoria' element={<ItemListContainer />}></Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App
