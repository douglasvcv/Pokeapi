import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex'

function App() {



  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Pokedex></Pokedex>
    </>
   
  )
}

export default App
