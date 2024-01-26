import React, {useContext} from "react";
import FavoriteContext from "../assets/contexts/favoritesContext";

function Navbar(){
    const {favoritePokemons} = useContext(FavoriteContext)
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return(
        <nav>
            <div>
                <img
               alt="Pokeapi-logo"
                src={logo}
                className="navbar-img"
                />
            </div>
            <div>{favoritePokemons.length}❤️</div>
        </nav>
    )
}

export default Navbar