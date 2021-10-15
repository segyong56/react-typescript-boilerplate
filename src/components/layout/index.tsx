import React, { FC } from 'react';

import './style.scss';

const Layout: FC = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
