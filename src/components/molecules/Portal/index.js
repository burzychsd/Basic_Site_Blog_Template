// DEPENDENCIES
import React, { useEffect, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

const Portal = ({ children, css, className, style, status }) => {
    let el = typeof document !== `undefined` ? document.createElement('div') : null

    useEffect(() => {
        portalRoot.appendChild(el)

        return () => { portalRoot.removeChild(el) }
    })

    if (el) {
        return ReactDOM.createPortal(
            <Fragment>
                {status && 
                <Fragment>
                    <RemoveScrollBar />
                    <Flex reset>
                        <Flex reset css={css} className={className} style={style}>
                        {children}
                        </Flex>
                    </Flex>
                </Fragment>}
            </Fragment>, el 
        )
    } else {
        return null
    }
}

Portal.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    status: PropTypes.bool.isRequired
}

export default Portal