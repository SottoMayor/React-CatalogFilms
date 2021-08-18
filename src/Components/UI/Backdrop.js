import React from 'react';
import { StyledBackdrop } from '../../styled-components/Styles'

const Backdrop = (props) => {
    return (
        props.show ? (
        <StyledBackdrop onClick={props.clicked}></StyledBackdrop>
        ) : null
    )
}

export default Backdrop
