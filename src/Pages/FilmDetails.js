import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';

import Loading from '../Components/UI/Loading';
import AlertStatus from '../Components/UI/AlertStatus';

const FilmDetails = () => {

    const { filmId } = useParams();

    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    
    const loadingFilmsHandler = useCallback( async () => {
        setError(null)
        setLoading(true);
        try{
            const response = await axios.get(`/r-api/?api=filmes/${filmId}`);

            if(response.data.length === 0){
                throw new Error('Filme não encontrado! Tente novamente.');
            }
            
            setFilm(response.data);
            
        }catch(err){
            setError(true);
            setMessage(err.message);
        }
        setLoading(false);
    }, [filmId])
    
    useEffect(() =>{
        loadingFilmsHandler();
        return () => {
            console.log('Unmounting FilmDetails')
        }
    },[loadingFilmsHandler])
    

    return (
        
        <div>
            {loading && <Loading/>}

            {!loading && !error && (
            <div>
                <header>
                        <button>Voltar</button>
                </header>

                <figure>
                    <img src={film.foto} alt={film.nome}/>
                </figure>

                <section>
                    <div>
                        <h2>{film.nome}</h2>
                        <p>{film.sinopse}</p>
                    </div>
                    <footer>
                        <button>Favoritar</button>
                        <a
                        target="blank"
                        href={`https://youtube.com/results?search_query=${film.nome} Trailer`}
                        >Ver Trailer</a>
                    </footer>
                </section>
            </div>
            )}

            {!loading && error && (
                    <AlertStatus status='fail' hideButton>{message}</AlertStatus>
            )}
        </div>
        
        
    )
}

export default FilmDetails
