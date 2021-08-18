import React, { Fragment } from 'react'
import { StyledFilm } from '../styled-components/Styles';
import Button from './UI/Button';

const Film = (props) => {

    const testerHandler = () => {
        console.log('This works!')
    }

    return (

        <Fragment>

            <StyledFilm>
                <figure className="figure">
                    <img src={props.foto} alt={props.nome} title={props.nome}/>
                </figure>

                <section className="info">
                    <div className="info__name">{props.nome}</div>

                    <div className="info__btn">
                        <Button onClick={testerHandler}>Ver Detalhes</Button>
                    </div>
                </section>
            </StyledFilm>

        </Fragment>
    )
}

export default Film
