import React from "react";

function Navbar(){
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
        </nav>
    )
}

export default Navbar