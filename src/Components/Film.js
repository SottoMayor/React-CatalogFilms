import React, { Fragment } from 'react'
import { StyledFilm } from '../styled-components/Styles';
import { Link } from 'react-router-dom';
import { StyledLink } from '../styled-components/Styles';
import Button from '../Components/UI/Button';

const Film = (props) => {
    console.log(props)

    return (

        <Fragment>

            <StyledFilm>
                <figure className="figure">
                    <img src={props.foto} alt={props.nome} title={props.nome}/>
                </figure>

                <section className="info">
                    <div className="info__name">{props.nome}</div>

                    <div className="info__btn">
                        {!props.favorits && (
                            <StyledLink>
                            <Link to={`/filmes/${props.id}`}>Ver Detalhes</Link>
                        </StyledLink>
                        )}

                        {
                            props.favorits && (
                                <Button onClick={() => {props.onDeleteFilm(props.id)}}>Deletar</Button>
                            )
                        }
                        
                    </div>
                </section>
            </StyledFilm>

        </Fragment>
    )
}

export default Film
