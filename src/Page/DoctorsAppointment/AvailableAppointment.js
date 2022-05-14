import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date, setDate }) => {
  return (
    <div>
      <h4 className='text-center text-secondary text-3xl'>Available Appointments on:{format(date, 'PP')}</h4>
    </div>
  );
};

export default AvailableAppointment;