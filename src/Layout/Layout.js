import React, { Fragment } from 'react'

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                Header!!
            </header>
            <main>
                {props.children}
            </main> 
        </Fragment>
    )
}

export default Layout
