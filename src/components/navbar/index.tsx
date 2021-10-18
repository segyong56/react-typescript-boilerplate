import React, { FC } from 'react';

import './style.scss';

const Navbar: FC = () => {
  const { pathname } = window.location;
  return (
    <nav className="navbar">
      <a href="/" className={`navbar__link ${pathname === '/' ? 'navbar__link--active' : ''}`}>
        Home
      </a>
      <span> | </span>
      <a
        href="/about"
        className={`navbar__link ${pathname === '/about' ? 'navbar__link--active' : ''}`}
      >
        About
      </a>
    </nav>
  );
};

export default Navbar;
