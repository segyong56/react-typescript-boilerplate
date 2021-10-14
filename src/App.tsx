import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { HomePage, AboutPage } from './pages';

import './styles/index.scss';

const App: FC = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
};

export default App;
