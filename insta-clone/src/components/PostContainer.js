//PostContainer
import React from 'react';

const PostContainer = props => {
    return (

        <div className="data">
          <h3>{props.data}</h3>

        </div>


    )
}

export default PostContainer;


// {props.pokemon.map(pokemon => (
//        <div key={pokemon.id} className="pokemon">
//          <img src={pokemon.img} alt={pokemon.name} />
//          <div>
//            <h3>{pokemon.name}</h3>
//          </div>
//        </div>
