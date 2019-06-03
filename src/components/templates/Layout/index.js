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
        config={{ mass: 1, tension: 60, friction: 20 }}
        key={location.pathname}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        >
        {() => style => (
          <animated.main style={style}>{children}</animated.main>
        )}
        </Transition>
        </div>
        <Footer></Footer>
        <form name='contact_basic' data-netlify='true' hidden>
          <input type='text' name='name' />
          <input type='email' name='email' />
          <textarea name='message'></textarea>
        </form>
      </Fragment>
    )}
  </Location>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout