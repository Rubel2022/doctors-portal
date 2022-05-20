import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import DoctorService from './DoctorService';
import Loading from '../Shared/Loading'

const AvailableAppointment = ({ date, setDate }) => {
  // const [services, setServices] = useState([])
  const [treatment, setTreatment] = useState(null)

  const formattedDate = format(date, 'PP');
  const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='px-12'>
      <h4 className='text-center text-secondary text-3xl'>Available Appointments on:{format(date, 'PP')}</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-28'>
        {
          services?.map(service => <DoctorService
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
          refetch={refetch}
          setTreatment={setTreatment}
        />
      }
    </div>
  );
};

export default AvailableAppointment;