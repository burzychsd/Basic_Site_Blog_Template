// DEPENDENCIES
import React, { Fragment } from 'react'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

const Portal = ({ children }) => {

    if (portalRoot) {
        return ReactDOM.createPortal(
            <Fragment>
                <RemoveScrollBar />
                {children}
            </Fragment>, portalRoot 
        )
    } else {
        return null
    }
}

Portal.propTypes = {
    children: PropTypes.node.isRequired
}

export default Portal