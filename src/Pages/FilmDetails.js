import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { alertAction } from '../store';
import axios from '../axios';

import FilmCard from '../Components/FilmCard'
import Alert from '../Layout/Alert';
import AlertStatus from '../Components/UI/AlertStatus';

const FilmDetails = () => {

    const dispatch = useDispatch();
    const showAlert = useSelector(state => state.alert.show)

    const { filmId } = useParams();

    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [alertError, setAlertError] = useState(null);
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
    

    const favoriteHandler = () => {
        setAlertError(null);

        const list = localStorage.getItem("filmes");

        let salvedList = JSON.parse(list) || [];

        
        const foundFilm = salvedList.findIndex(salvedFilm => salvedFilm.id.toString() === filmId.toString());
        if(foundFilm !== -1){
            setAlertError(true);
            setMessage(`${film.nome} já está nos seus favoritos!`);
            dispatch(alertAction.showAlert());
            return;
        }
        

        salvedList.push(film);
        localStorage.setItem('filmes', JSON.stringify(salvedList));
        setMessage(`Você favoritou ${film.nome}`);
        dispatch(alertAction.showAlert());

        }
        
    
    return (
        <div>
            <Alert show={showAlert} clicked={() => { dispatch(alertAction.closeAlert()); }}>
                <AlertStatus status={alertError ? 'warning' : 'success'}>{message}</AlertStatus>
            </Alert>
            <FilmCard onFavorite={favoriteHandler} film={film} loading={loading} error={error} message={message}/>
        </div>
    )
}

export default FilmDetails;
