import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { HomePage, AboutPage } from './pages';

import './styles/index.scss';

const App: FC = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </>
  );
};

export default App;
