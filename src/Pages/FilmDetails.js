import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';

import FilmCard from '../Components/FilmCard'

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
            <FilmCard film={film} loading={loading} error={error} message={message}/>
        </div>
    )
}

export default FilmDetails;
