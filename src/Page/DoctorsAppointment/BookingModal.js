import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);

  const formattedDate = format(date, 'PP')

  const handleBooking = event => {
    event.preventDefault()
    const slot = event.target.slot.value;
    console.log(_id, name, slot)

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value
    }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        //to close the modal
        if (data.success) {
          toast(`Appointment is set ${formattedDate} at ${slot}`)
        } else {
          toast.error(`Already have an Appointment on ${data.booking?.data} at ${data.booking?.slot}`)
        }
        refetch();
        setTreatment(null)
      })
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-secondary">Booking for:{name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 justify-center mt-4 gap-5'>
            <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-primary w-full max-w-xs" />
            <select name="slot" class="select w-full max-w-xs">
              {
                slots.map((slot, index) => <option
                  key={index}
                  value={slot}>{slot}
                </option>)
              }

            </select>
            <input type="text" name="name" disabled value={user?.displayName || ""} class="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email || ""} class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />

            <input type="submit" value="Submit" class="btn btn-secondary text-white mt-5 w-full max-w-xs" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;