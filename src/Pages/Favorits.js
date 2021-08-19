import React, {useState, useEffect } from 'react';
import Film from '../Components/Film';

const Favorits = () => {

    const [favorits, setFavorits] = useState([])
    
    // Getting films of the localStorage
    useEffect(() =>{
        const favoritFilms = localStorage.getItem('filmes');
        setFavorits(JSON.parse(favoritFilms));
    }, [])

    // Updating films of the localStorage


    const deleteFilmHandler = () => {
        console.log('clicked!')
    }

    return (
        <div>
            {favorits.map( film => <Film {...film} key={film.id} onDeleteFilm={deleteFilmHandler} favorits/>)}
        </div>
    )
}

export default Favorits
