// DEPENDENCIES
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// COMPONENTS
import Header from './../../organisms/Header'

// STYLES
import './Layout.css'

// ACTIONS
import { setDimensions } from './actions'

const Layout = ({ children, setDimensions, width }) => {

  useEffect(() => {
    setDimensions()
    window.addEventListener('resize', setDimensions)

    return () => { window.removeEventListener('resize', setDimensions) }
  })

  return (
    <div id='site_wrapper' style={{ 
      margin: `0 auto`,
      maxWidth: 960,
      position: 'relative'
    }}>
      <Header height={64} width={width} />
      <main style={{ paddingTop: 'calc(64px + 1.5rem)' }}>{children}</main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  width: state.dimensions.width
})

export default connect(mapStateToProps, { setDimensions })(Layout)