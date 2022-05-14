import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import DoctorService from './DoctorService';

const AvailableAppointment = ({ date, setDate }) => {
  const [services, setServices] = useState([])
  const [treatment, setTreatment] = useState(null)
  useEffect(() => {
    fetch('service.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='px-12'>
      <h4 className='text-center text-secondary text-3xl'>Available Appointments on:{format(date, 'PP')}</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-28'>
        {
          services.map(service => <DoctorService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></DoctorService>)
        }
      </div>
      {
        treatment && <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      }
    </div>
  );
};

export default AvailableAppointment;