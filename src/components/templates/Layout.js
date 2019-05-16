// DEPENDENCIES
import React from "react"
import PropTypes from "prop-types"

// STYLES


const Layout = ({ children }) => (
  <div id='site_wrapper' style={{ 
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  }}>
    <main>{children}</main>
    <footer></footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout