import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {siteTitle}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item" />
        <a href="/" className="nav-link">
          Cart
        </a>
        <a href="/" className="nav-link">
          Sign Up
        </a>
      </ul>
    </nav>
  </div>

  // <div
  //   style={{
  //     background: 'rebeccapurple',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: 'white',
  //           textDecoration: 'none',
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </div>
)

export default Header
