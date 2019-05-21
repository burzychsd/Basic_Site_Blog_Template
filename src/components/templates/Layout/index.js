// DEPENDENCIES
import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Header from './../../organisms/Header'

// STYLES
import './Layout.css'

const Layout = ({ children }) =>  (
  <div id='site_wrapper'>
    <Header height={64} />
    <main>{children}</main>
    <footer></footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout