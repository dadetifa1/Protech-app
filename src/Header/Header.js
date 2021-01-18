import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <Link to={'/'}>
          <h1> Home </h1>
        </Link>
      </>
    );
  }
}

export default Header;
