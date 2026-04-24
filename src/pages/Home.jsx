import React from 'react';
import Hero from '../components/Hero';
import EUFunding from '../components/EUFunding';
import About from '../components/About';
import Objectives from '../components/Objectives';
import Partners from '../components/Partners';
import Results from '../components/Results';
import News from '../components/News';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <EUFunding />
      <About />
      <Objectives />
      <Partners />
      <Results />
      <News />
      <Newsletter />
    </main>
  );
};

export default Home;
