// DEPENDENCIES
import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Header from './../../organisms/Header'

// STYLES
import './Layout.css'

const Layout = ({ children }) => (
  <div id='site_wrapper' style={{ 
    margin: `0 auto`,
    maxWidth: 960,
    position: 'relative'
  }}>
    <Header height={64} />
    <main style={{ paddingTop: 'calc(64px + 1.5rem)' }}>{children}</main>
    <footer></footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout