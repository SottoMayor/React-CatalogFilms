import React from 'react';

import CancelPNG from '../../Assets/cancel.png';
import CheckPNG from '../../Assets/check.png';
import DangerPNG from '../../Assets/danger.png';
import Button from './Button'
import { StyledAlertStatus } from '../../styled-components/Styles';

const AlertStatus = (props) => {

    let image;
    let bgColor;

    switch (props.status) {
        case 'fail':
            image = <img src={CancelPNG} alt='Fail'/>
            bgColor = {'backgroundColor': '#ff5666'};
            break;
        case 'success':
            image = <img src={CheckPNG} alt='Success'/>
            bgColor = {'backgroundColor': '#7bc950'};
            break;
        case 'warning':
            image = <img src={DangerPNG} alt='Warning'/>
            bgColor = {'backgroundColor': '#ffb238'};
            break;
    
        default:
            break;
    }

    return (
        <StyledAlertStatus style={bgColor}>
            <figure>
                {image}
            </figure>
            <main>
                {props.children}
            </main>
            <footer>
                <Button>OK!</Button>
            </footer>

        </StyledAlertStatus>
    )
}

export default AlertStatus
