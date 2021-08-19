import React from 'react'
import { useHistory } from 'react-router';

import Loading from '../Components/UI/Loading';
import AlertStatus from '../Components/UI/AlertStatus';
import BackButton from '../Assets/back-button.png';
import { StyledFilmCard} from '../styled-components/Styles';
import Button from '../Components/UI/Button';

const FilmCard = (props) => {

    const history = useHistory();

    let context;
    if(props.loading){
        context = <Loading/>;
    }
    if(!props.loading && props.error){
        context = <AlertStatus status='fail' hideButton>{props.message}</AlertStatus>;
    }
    if(!props.loading && !props.error){
        context = (
            <StyledFilmCard>
                <div className='goBack'>
                        <img src={BackButton} alt='GoBack' title='Voltar' onClick={() => history.goBack()}/>
                </div>

                <section className='card-container'>

                    <figure className='figure'>
                        <img src={props.film.foto} alt={props.film.nome}/>
                    </figure>

                    <div>
                        <h2 className='card-container__title'>{props.film.nome}</h2>
                        <p className='card-container__text'>{props.film.sinopse}</p>
                    </div>
                    <footer className='card-container__footer'>
                        <Button onClick={() => props.onFavorite()}>Favoritar</Button>
                            <a className='footer__link'target="blank"
                            href={`https://youtube.com/results?search_query=${props.film.nome} Trailer`}
                            >Ver Trailer</a>
                    </footer>
                </section>
            </StyledFilmCard>
        )
    }

    return (
        <div>
            { context }
        </div>
    )

}

export default FilmCard
