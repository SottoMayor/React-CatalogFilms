import React from 'react';
import { StyledContainer, StyledModal } from '../../styled-components/Styles';
import styled from 'styled-components'

const StyledContainerModal = styled(StyledContainer)`

    overflow-y: scroll;
    background-color: ${props => props.theme.secondary};
    margin: 0 auto;
    display: block;

`

const Modal = (props) => {


    return (
        props.show ? (
        <StyledModal>
            <header>
                <h2>Daflix Prime, a solução definitiva em filmes!</h2>
            </header>
            <StyledContainerModal>
                {props.children}
            </StyledContainerModal>
        </StyledModal>
        ) : null
    )
}

export default Modal
