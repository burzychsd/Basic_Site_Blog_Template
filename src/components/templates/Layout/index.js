// DEPENDENCIES
import React, { Fragment } from 'react'
import { Transition, config } from 'react-spring/renderprops'
import { Location } from '@reach/router'
import PropTypes from 'prop-types'

// COMPONENTS
import Header from './../../organisms/Header'
import Footer from './../../organisms/Footer'

// STYLES
import './Layout.css'

const Layout = ({ children }) => (
  <Location>
    {({ location }) => (
      <Transition
      config={{ mass: 20, tension: 355, friction: 80, duration: 400 }}
      keys={location.pathname}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      delay={400}
      >
        {() => style => (
          <Fragment>
            <div id='site_wrapper'>
            <Header height={64} />
            <main style={{...style}}>{children}</main>
            </div>
            <Footer></Footer>
          </Fragment>
        )}
      </Transition>
    )}
  </Location>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout