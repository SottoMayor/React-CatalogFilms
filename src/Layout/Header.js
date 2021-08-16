import React from 'react';
import { StyledHeader } from '../styled-components/Styles';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <StyledHeader>
            <figure>
                <h2>Daflix Prime</h2>
            </figure>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/filmes" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/filmes/favoritos">Favoritos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Logar</NavLink>
                    </li>
                </ul>
            </nav>

        </StyledHeader>
    )
}

export default Header
