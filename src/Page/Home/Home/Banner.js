import React from 'react';
import chair from '../../../assets/images/chair.png'
import bgPicture from '../../../assets/images/bg.png'
import './Banner.css'
import PrimaryButton from '../../Shared/PrimaryButton';
const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${bgPicture})` }} className="hero min-h-screen mt-20 mb-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img style={{ width: '594px', height: '355px' }} className='banner_style' src={chair} />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;