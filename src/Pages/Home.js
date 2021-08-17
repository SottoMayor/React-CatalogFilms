import React, { useState, useEffect } from 'react';
import axios from '../axios';
import Loading from '../Components/UI/Loading';

import Film from '../Components/Film';

const Home = () => {

    const [films, setFilms] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const loadingFilmsHandler = async () => {
            setLoading(true);
            try{
                const response = await axios.get('/r-api/?api=filmes/');
                setFilms(response.data);
                setLoading(false);

            }catch(error){
                setError(true);
                setLoading(false);
            }
        }

        loadingFilmsHandler();
    },[])

    return (
        <section>
            {loading && <Loading/>}
            {!loading && films.map(film => <Film {...film} key={film.id}/>)}
        </section>
    )
}

export default Home
