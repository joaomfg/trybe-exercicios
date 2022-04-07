import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        return(
            <div>
                <Pokemon pokemons={pokemons}/>
            </div>
        );
    }
}

export default Pokedex;