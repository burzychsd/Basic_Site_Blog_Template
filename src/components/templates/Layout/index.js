// DEPENDENCIES
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// COMPONENTS
import Header from './../../organisms/Header'
import MobileMenu from './../../molecules/MobileMenu'

// STYLES
import './Layout.css'

// ACTIONS
import { setDimensions } from './actions'

const Layout = ({ children, setDimensions, width, mobileMenu }) => {

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
      {width <= 500 && <MobileMenu status={mobileMenu} />}
      <main style={{ paddingTop: 'calc(64px + 1.5rem)' }}>{children}</main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  width: state.dimensions.width,
  mobileMenu: state.mobileMenu.mobileMenuStatus
})

export default connect(mapStateToProps, { setDimensions })(Layout)