import React, { FC } from 'react';
import { Layout } from '../../components';

import icon from '../../assets/code.png';
import './style.scss';

const HomePage: FC = () => {
  return (
    <Layout>
      <section className="welcome">
        <h1>React TypeScript Boilerplate</h1>
        <p>
          <img src={icon} alt="icon" />
          This is a React X TypeScript boilerplate using webpack v5.
        </p>
      </section>
    </Layout>
  );
};

export default HomePage;
