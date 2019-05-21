// DEPENDENCIES
import React, { useEffect, Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

const Portal = ({ children, cssPortal, onClick, status, containerStyles }) => {
    let el = typeof document !== `undefined` ? document.createElement('div') : null

    useEffect(() => {
        portalRoot.appendChild(el)

        return () => { portalRoot.removeChild(el) }
    })

    if (el) {
        return ReactDOM.createPortal(
            <Fragment>
                {children}
            </Fragment>, el 
        )
    } else {
        return null
    }
}

Portal.propTypes = {
    children: PropTypes.node.isRequired
}

export default Portal