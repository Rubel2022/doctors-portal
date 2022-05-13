import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-10">
      <div class="card lg:card-side bg-primary bg-gradient-to-r from-secondary to-primary shadow-xl text-white p-3">
        <figure><img src={clock} alt="Album" /></figure>
        <div class="card-body">
          <h2 class="card-title">Opening Hours</h2>
          <p>Click the button to listen on Spotiwhy app.</p>

        </div>
      </div>
      <div class="card lg:card-side bg-accent shadow-xl text-white p-3">
        <figure><img src={marker} alt="Album" /></figure>
        <div class="card-body">
          <h2 class="card-title">Visit our Location</h2>
          <p>Click the button to listen on Spotiwhy app.</p>

        </div>
      </div>
      <div class="card lg:card-side bg-primary bg-gradient-to-r from-secondary to-primary shadow-xl text-white p-3">
        <figure><img src={phone} alt="Album" /></figure>
        <div class="card-body">
          <h2 class="card-title">Contact us Now</h2>
          <p>Click the button to listen on Spotiwhy app.</p>

        </div>
      </div>
    </div>

  );
};

export default InfoCard;