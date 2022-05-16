import React from 'react';

const DoctorService = ({ service, setTreatment }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{
          service.slots.length > 0
            ? <span>{service.slots[0]}</span>
            : <span className='text-red-500'>No Slot Available.Try another day.</span>
        }</p>
        <p>{service.slots.length} {service.slots.length > 1 ? 'spaces' : "space"} available</p>
        <div class="card-actions">

          <label htmlFor="booking-modal"
            disabled={service.slots.length === 0}
            onClick={() => setTreatment(service)}
            class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-secondary">BOOK APPOINTMENT</label>

        </div>
      </div>
    </div>
  );
};

export default DoctorService;