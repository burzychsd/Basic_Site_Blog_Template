// DEPENDENCIES
import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
  <div id='site_wrapper' style={{ 
    margin: `0 auto`,
    maxWidth: 960,
  }}>
    <main>{children}</main>
    <footer></footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout