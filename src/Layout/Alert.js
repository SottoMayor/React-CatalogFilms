import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

import Modal from '../Components/UI/Modal';
import Backdrop from '../Components/UI/Backdrop';

const Info = (props) => {
    return(
        <Fragment>
            {
                createPortal(<Backdrop show={props.show} clicked={props.clicked}/>, document.getElementById('root-backdrop'))
            }
            {
                createPortal(<Modal show={props.show}>{props.children}</Modal>, document.getElementById('root-modal'))
            }
        </Fragment>
    )
}

export default Info;