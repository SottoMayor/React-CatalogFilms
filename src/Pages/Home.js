import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { alertAction } from '../store';
import axios from '../axios';

import Loading from '../Components/UI/Loading';
import Film from '../Components/Film';
import Alert from '../Layout/Alert';
import AlertStatus from '../Components/UI/AlertStatus';

const Home = () => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const showAlert = useSelector(state => state.alert.show);
    const dispatch = useDispatch()

    const closeModalHandler = () => {
        dispatch(alertAction.closeAlert())
    }
    
    const loadingFilmsHandler = useCallback( async () => {
        setLoading(true);
        setError(null)
        try{
            const response = await axios.get('/r-api/?api=filmes/');
            
            setFilms(response.data);
            setMessage('Os filmes foram carregados com sucesso!');
            
        }catch(err){
            setError(true);
            setMessage('Algo deu errado! Pedimos desculpa pelo incômodo.');
        }
        dispatch(alertAction.showAlert());
        setLoading(false);
    }, [dispatch])
    
    useEffect(() =>{
        loadingFilmsHandler();
    },[loadingFilmsHandler])
    
    return (
        <section>
            <Alert show={showAlert} clicked={closeModalHandler}>
                <AlertStatus status={error ? 'fail' : 'success'}>{message}</AlertStatus>
            </Alert>
            {loading && <Loading/>}
            {!loading && films.length > 0 && films.map(film => <Film {...film} key={film.id}/>)}
            {!loading && films.length === 0 && <AlertStatus status='warning' hideButton>Você não possui filmes cadastrados!</AlertStatus>}
        </section>
    )
}

export default Home
