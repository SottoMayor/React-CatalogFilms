import React, {useState, useEffect } from 'react';
import Film from '../Components/Film';

const Favorits = () => {

    const [favorits, setFavorits] = useState([])
    
    // Getting films of the localStorage
    useEffect(() => {
        const favoritFilms = localStorage.getItem('filmes');
        setFavorits(JSON.parse(favoritFilms));
    }, []);

    
    const deleteFilmHandler = (filmId) => {
        const updatedFavorits = favorits.filter( film => film.id !== filmId );
        setFavorits(updatedFavorits);
    }

    return (
        <div>
            {favorits.map( film => <Film {...film} key={film.id} onDeleteFilm={deleteFilmHandler} favorits/>)}
        </div>
    )
}

export default Favorits
