import React from 'react';

import { Hero, LatestProducts } from '../components';
import { constants } from '../constants';

const Home = () => (
  <section className={`${constants.themes.main.styles.contentBlock.marginTop}`}>
    <Hero />
    <LatestProducts />
  </section>
);

export default Home;
