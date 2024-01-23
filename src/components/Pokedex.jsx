import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  console.log("pokemonsss", pokemons);
  return (
    <div className="pokedex-header">
      <div>
        <h1>Pokedex</h1>
      </div>
      <div>Paginação:</div>
      {loading ? (
        <div>Carregando, segura fera!</div>
      ) : (
        <div className="pokedex-grind">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <Pokemon key={index} pokemon={pokemon}></Pokemon>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
