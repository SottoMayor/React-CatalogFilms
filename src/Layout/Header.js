import React from 'react';
import { StyledHeader } from '../styled-components/Styles';

const Header = () => {
    return (
        <StyledHeader>
            <figure>
                <h2>Daflix Prime</h2>
            </figure>

            <nav>
                <ul>
                    <li>
                        <a href="/filmes">Home</a>
                    </li>
                    <li>
                        <a href="/filmes/favoritos">Favoritos</a>
                    </li>
                    <li>
                        <a href="/login">Logar</a>
                    </li>
                </ul>
            </nav>

        </StyledHeader>
    )
}

export default Header
