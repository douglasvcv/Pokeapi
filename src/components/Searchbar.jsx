import React, { useState } from "react";


const Searchbar = (props) =>{
    
   

    const [search, setSearch] = useState("Charizard")
    const {onSearch} = props
    
    let onChangeHandle = (n) =>{
        setSearch(n.target.value)
        if(e.target.value === 0){
            onSearch(undefined)
        }
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
            </div>
            <div className="searchbar-bnt">
                <button onClick={onButtonClickHandle}>Buscar</button>
            </div>
            
        </div>
    )
}

export default Searchbar