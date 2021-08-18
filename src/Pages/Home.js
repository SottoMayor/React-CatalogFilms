import React, { useState, useEffect, useCallback } from 'react';
import axios from '../axios';
import Loading from '../Components/UI/Loading';

import Film from '../Components/Film';
import Alert from '../Layout/Alert';
import AlertStatus from '../Components/UI/AlertStatus';

const Home = () => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    
    const loadingFilmsHandler = useCallback( async () => {
        setError(null)
        setLoading(true);
        try{
            const response = await axios.get('/r-api/?api=filmes/');
            
            setFilms(response.data);
            setMessage('Os filmes foram carregados com sucesso!');
            
        }catch(err){
            setError(true);
            setMessage('Algo deu errado! Pedimos desculpa pelo incômodo.');
        }
        setShow(true);
        setLoading(false);
    }, [])
    
    useEffect(() =>{
        loadingFilmsHandler();
    },[loadingFilmsHandler])
    
    return (
        <section>
            <Alert show={show}>
                <AlertStatus status={error ? 'fail' : 'success'}>{message}</AlertStatus>
            </Alert>
            {loading && <Loading/>}
            {!loading && films.map(film => <Film {...film} key={film.id}/>)}
        </section>
    )
}

export default Home
