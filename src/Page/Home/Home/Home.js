import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import InfoCard from './InfoCard';
import Appointment from './MakeAppointment/Appointment';


import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
  return (
    <div className=''>
      <Banner />
      <InfoCard />
      <Services />
      <Appointment />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;