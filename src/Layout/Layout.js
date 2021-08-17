import React, { Fragment } from 'react';
import Header from './Header';
import { StyledContainer } from '../styled-components/Styles';

const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            <StyledContainer>
                {props.children}
            </StyledContainer> 
        </Fragment>
    )
}

export default Layout
