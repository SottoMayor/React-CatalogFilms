import React, { useState, useEffect } from 'react';
import axios from '../axios';
import Loading from '../Components/UI/Loading';

import Film from '../Components/Film';
import Alert from '../Layout/Alert';

const Home = () => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const loadingFilmsHandler = async () => {
            setError(null)
            setLoading(true);
            try{
                const response = await axios.get('/r-api/?api=filmes/');

                setFilms(response.data);
                
            }catch(err){
                setError(true);
            }
            setShow(true);
            setLoading(false);
        }

        loadingFilmsHandler();
    },[])

    let content;

    return (
        <section>
            <Alert show={show}>Deu erro</Alert>
            {loading && <Loading/>}
            {!loading && films.map(film => <Film {...film} key={film.id}/>)}
        </section>
    )
}

export default Home
