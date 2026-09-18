import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <ItemListContainer />
    <ItemDetailContainer id={2} />
    </>
  )
}

export default App
