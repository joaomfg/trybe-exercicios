import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const pokemons = this.props.pokemons;
        
        return(
            pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                    <p>{pokemon.name}</p>
                    <p>{pokemon.type}</p>
                    <p>Avarage weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
                    <img src={pokemon.image} alt="Imagem do pokemon" />
                </div>
            ))
        );
    }
}

Pokemon.propTypes = {
    pokemons: PropTypes
    .arrayOf(PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.exact({
            value: PropTypes.number,
            measurementUnit: PropTypes.string
        }),
        image: PropTypes.string,
        moreInfo: PropTypes.string 
    })),

}

export default Pokemon;