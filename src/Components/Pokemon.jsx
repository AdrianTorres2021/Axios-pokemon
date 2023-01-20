import React, { useEffect, useState} from "react";
import axios from 'axios';

const Axiospokemon = (props) => {
    const [pokemones, setPokemones] = useState([]);

    const onClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => {
            setPokemones(response.data.results)
        }).catch(e=>console.log(new Error('Error al establecer conexión con la API')))
    }

    return (
        <div className='container'>
            <button onClick={onClick} className='button'>Fetch Pokemon </button>
            <ul className='ul-list'>
                {pokemones ? pokemones.map((item, index) => {
                    return(<li className="li-list" key={index}>{item.name}</li>)
                }):null}
            </ul>
        </div>
    );
}

export default Axiospokemon;















