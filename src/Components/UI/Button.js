import React from 'react';
import { StyledButton } from '../../styled-components/Styles'

const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick} type={props.type ||"button"} disabled={props.disabled}>
            {props.children}
        </StyledButton>
    )
}

export default Button;
