import React, { useState, useEffect } from 'react';
import axios from '../axios';

import Film from '../Components/Film';

const Home = () => {

    const [films, setFilms] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const loadingFilmsHandler = async () => {
            setLoading(true);
            const response = await axios.get('/r-api/?api=filmes/');

            try{
                setFilms(response.data);
                setLoading(false)

            }catch(error){

                setError(true);
                setLoading(false)

            }
        }

        loadingFilmsHandler();
    },[])

    return (
        <section>
            {films.map(film => <Film {...film} key={film.id}/>)}
        </section>
    )
}

export default Home
