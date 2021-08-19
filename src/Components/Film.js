import React, { Fragment } from 'react'
import { StyledFilm } from '../styled-components/Styles';
import { Link } from 'react-router-dom';
import { StyledLink } from '../styled-components/Styles';

const Film = (props) => {

    return (

        <Fragment>

            <StyledFilm>
                <figure className="figure">
                    <img src={props.foto} alt={props.nome} title={props.nome}/>
                </figure>

                <section className="info">
                    <div className="info__name">{props.nome}</div>

                    <div className="info__btn">
                        <StyledLink>
                            <Link to={`/filmes/${props.id}`}>Ver Detalhes</Link>
                        </StyledLink>
                    </div>
                </section>
            </StyledFilm>

        </Fragment>
    )
}

export default Film
