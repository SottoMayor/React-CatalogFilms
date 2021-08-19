import React, {useState, useEffect } from 'react';
import Film from '../Components/Film';
import AlertStatus from '../Components/UI/AlertStatus';

const Favorits = () => {

    const [favorits, setFavorits] = useState([]);

    
    // Getting films of the localStorage
    useEffect(() => {
        const favoritFilms = localStorage.getItem('filmes');
        setFavorits(JSON.parse(favoritFilms));
    }, []);

    // Updating films of the localStorage
    useEffect(() => {
        localStorage.setItem('filmes', JSON.stringify(favorits));
    }, [favorits]);

    
    const deleteFilmHandler = (filmId) => {
        const updatedFavorits = favorits.filter( film => film.id !== filmId );
        setFavorits(updatedFavorits);
    }

    return (
        <div>
            <h2 style={{'textAlign': 'center', 'margin-bottom': '15px'}}>Meus Filmes Favoritos!</h2>
            {favorits.length > 0 && favorits.map( film => <Film {...film} key={film.id} onDeleteFilm={deleteFilmHandler} favorits/>)}
            {favorits.length === 0 && <AlertStatus status='warning' hideButton> Você não possui filmes favoritos! </AlertStatus>}
        </div>
    )
}

export default Favorits
