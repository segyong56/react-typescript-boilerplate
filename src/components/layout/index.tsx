import React, { FC } from 'react';
import Navbar from '../navbar';

import './style.scss';

const Layout: FC = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
