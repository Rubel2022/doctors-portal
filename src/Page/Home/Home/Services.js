import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import cavity from '../../../assets/images/cavity.png'
import treatment from '../../../assets/images/treatment.png'


const Services = () => {
  const services = [
    {
      _id: 1,
      name: 'Fluoride Treatment',
      description: '',
      img: fluoride

    },
    {
      _id: 2,
      name: 'Cavity Filling Treatment',
      description: '',
      img: cavity

    },
    {
      _id: 3,
      name: 'Teeth Whitening',
      description: '',
      img: whitening

    },
  ]
  return (
    <div className='my-28 px-10'>
      <div className='text-center p-6'>
        <h3 className='text-primary uppercase text-xl font-bold'>Our Services</h3>
        <h2 className='text-accent text-4xl font-bold'>Service We Provide</h2>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
      <div >
        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row">
            <img src={treatment} class="max-w-sm rounded-lg shadow-2xl mx-10" />
            <div>
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary shadow-xl text-white font-bold uppercase">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;