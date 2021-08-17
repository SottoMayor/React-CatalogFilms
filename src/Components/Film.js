import React from 'react'
import { StyledFilm } from '../styled-components/Styles'

const Film = (props) => {
    console.log(props)
    return (
        <StyledFilm>
            <figure className="figure">
                <img src={props.foto} alt={props.nome} title={props.nome}/>
            </figure>

            <section className="info">
                <div className="info__name">{props.nome}</div>
                
                <div className="info__btn">
                    <button >Ver Detalhes</button>
                </div>
            </section>
        </StyledFilm>
    )
}

export default Film
