import React, { useState } from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokedex = (props) => {

  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler= ()=>{
    if(page>0){
      setPage(page-1)
    }  
 }
 const onRightClickHandler= ()=>{
    if(page+1 !== totalPages){
      setPage(page+1)
    }
 }
  return (
    <div className="pokedex-header">
    <div className="pokedex-top">
        <h1>Pokedex</h1>
    <Pagination
    page={page+1}
    totalPages={totalPages}
    onLeftClick={onLeftClickHandler}
    onRightClick={onRightClickHandler}
    ></Pagination>
    </div>
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
