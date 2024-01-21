import React, { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () =>{
    
   

    const [search, setSearch] = useState("Charizard")
    const [pokemon, setPokemon] = useState()
    
    let onChangeHandle = (n) =>{
        console.log(`pokemon: ${n.target.value}`)
        setSearch(n.target.value)
    }

    

const onButtonClickHandle = () => {
    onSearchHandler(search)
         
}

const onSearchHandler = async (pokemon) =>{
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                type="text" 
                onChange={onChangeHandle}
                placeholder="Buscar o pokemon"
                />
                {search}    
            </div>
            <div className="searchbar-bnt">
                <button onClick={onButtonClickHandle}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default}/>
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar