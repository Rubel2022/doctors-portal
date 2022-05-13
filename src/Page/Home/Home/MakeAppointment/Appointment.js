import React from 'react';
import doctors from '../../../../assets/images/doctor.png'
import bgappointment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../Shared/PrimaryButton';

const Appointment = () => {
  return (
    <section
      style={{
        background: `url(${bgappointment})`
      }}
      className='flex justify-center items-center mb-10'>
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-160px]' src={doctors} alt="" />
      </div>
      <div className='flex-1 p-6'>
        <h4 className='text-primary font-bold p-2'>Appointment</h4>
        <h2 className='text-3xl text-white p-2'>Make an appointment Today</h2>
        <p className='text-white p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam maiores animi libero totam necessitatibus recusandae fugiat placeat exercitationem dicta maxime qui, harum, eligendi corrupti! Praesentium labore modi tempore!</p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>


  );
};

export default Appointment;