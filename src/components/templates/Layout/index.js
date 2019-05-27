// DEPENDENCIES
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Header from './../../organisms/Header'
import Footer from './../../organisms/Footer'

// STYLES
import './Layout.css'

const Layout = ({ children }) =>  (
  <Fragment>
    <div id='site_wrapper'>
      <Header height={64} />
      <main>{children}</main>
    </div>
    <Footer></Footer>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout