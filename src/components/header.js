import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// import gatsbyLogo from '../images/gatsby-icon.png';

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
          {/* <img style={{ width: '100px' }} src={gatsbyLogo} alt="Gatsby logo" /> */}
        </Link>
      </h1>
      {siteDescription}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  siteDescription: '',
};

export default Header;
