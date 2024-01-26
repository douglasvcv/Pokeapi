import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemon, getPokemonData } from "./api";
import { FavoriteProvider } from "./assets/contexts/favoritesContext";

function App() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchpokemons ERROR: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavotitePokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if ((favoriteIndex >= 0)) {
      updateFavorites.slice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    setFavorites(updateFavorites);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavotitePokemons,
      }}
    >
      <>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        ></Pokedex>
      </>
    </FavoriteProvider>
  );
}

export default App;
