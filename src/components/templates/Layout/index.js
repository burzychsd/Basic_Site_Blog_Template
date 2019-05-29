// DEPENDENCIES
import React, { Fragment } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
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
      <Fragment>
        <div id='site_wrapper'>
        <Header height={64} />
        <Transition
        native
        config={{ mass: 20, tension: 355, friction: 80, duration: 400 }}
        keys={location.pathname}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        >
        {() => style => (
          <animated.main style={{...style}}>{children}</animated.main>
        )}
        </Transition>
        </div>
        <Footer></Footer>
      </Fragment>
    )}
  </Location>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout