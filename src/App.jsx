import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex'
import { getPokemon, getPokemonData } from './api'



function App() {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

   const fetchPokemons = async () => {
     try {
     setLoading(true)
     const data = await getPokemon()
      const promises = data.results.map(async (pokemon)=>{
      return await getPokemonData(pokemon.url)
      })

     const results = await Promise.all(promises)
     setPokemons(results)
     setLoading(false)
    } catch (error) {
     console.log("fetchpokemons ERROR: ", error)
    }
   }

   useEffect(() =>{
   console.log("Carregou")
     fetchPokemons()
   }, [])

  


  
  return (
    <>
    <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Pokedex
    pokemons={pokemons} loading={loading}
    ></Pokedex>
    
    </>
   
  )
}

export default App
