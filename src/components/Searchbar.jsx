import React, { useState } from "react";

const Searchbar = (props) =>{
    
    const {onSearch} = props

    const [search, setSearch] = useState("Charizard")
    
    
    let onChangeHandle = (n) =>{
        console.log(`pokemon: ${n.target.value}`)
        setSearch(n.target.value)
    }

const onButtonClickHandle = () => {
    onSearch(search)
         
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
        </div>
    )
}

export default Searchbar