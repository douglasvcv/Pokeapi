import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import {searchPokemon} from './api'

function App() {

const onSearchHandler = async (pokemon) =>{
  console.log(`Pokemonn: ${pokemon}`)
  
}

  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar></Navbar>
    <Searchbar
    onSearch={onSearchHandler}
    ></Searchbar>

    </>
   
  )
}

export default App
