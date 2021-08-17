import React from 'react'

const Film = (props) => {
    return (
        <div>
            <div>{props.foto}</div>
            <div>{props.id}</div>
            <div>{props.nome}</div>
            <div>{props.sinopse}</div>
        </div>
    )
}

export default Film
