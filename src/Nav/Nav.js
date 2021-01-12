import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <nav className='Nav'>
      <div className="left-links">
        <Link className="links" to={'/'}>
          Home
        </Link>
        <Link className="links" to={'/collection'}>
          Sales
        </Link>
        <Link className="links" to={'/salesentry'}>
          Enter sales
        </Link>
      </div>
      {/* <div className="right-links">
        <Link className="links" to={'/'}>
          Register
        </Link>
        <Link className="links" to={'/'}>
          Login
        </Link>
      </div> */}
    </nav>
  );
}
