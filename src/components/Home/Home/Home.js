import React from 'react';
import NavTwo from '../../Navtwo/NavTwo';
import AboutTechnician from '../AboutTechnician/AboutTechnician';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
  return (
    <section className='container'>
      <NavTwo />
      <HomeBanner />
      <Service />
      <AboutTechnician />
      <Review />
      <FAQ />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Home;
