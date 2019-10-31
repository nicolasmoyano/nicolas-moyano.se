import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'fixed',
      top: '0',
      width: '100%',
      background: `white`,
      marginBottom: `1.45rem`,
      borderBottom: '1px solid #e4e4e4'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ fontFamily: "Open Sans", fontWeight: 900, margin: 0 , fontSize: '1.4rem'}}>
        <Link
          to="/"
          style={{
            color: `#505050`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
