import React from 'react';
import AboutTechnician from '../AboutTechnician/AboutTechnician';
import HomeBanner from '../HomeBanner/HomeBanner';
import Nav from '../Nav/Nav';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
  return (
    <section className='container'>
      <Nav />
      <HomeBanner />
      <Service />
      <AboutTechnician />
      <Review />
    </section>
  );
};

export default Home;