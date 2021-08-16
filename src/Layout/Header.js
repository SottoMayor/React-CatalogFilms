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
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/salvos">Meus Filmes</a>
                    </li>
                    <li>
                        <a href="/logar">Logar</a>
                    </li>
                </ul>
            </nav>

        </StyledHeader>
    )
}

export default Header
