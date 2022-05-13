import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      city: 'California',
      img: people1
    },
    {
      _id: 2,
      name: 'Winson Herry',
      city: 'California',
      img: people2
    },
    {
      _id: 3,
      name: 'Winson Herry',
      city: 'California',
      img: people3
    },
  ]
  return (
    <section >
      <div className='flex justify-between items-center'>
        <div className='ml-20'>
          <h4 className="text-primary font-bold ">Testimonial</h4>
          <h2 className='text-4xl'>What Our patients Says</h2>
        </div>
        <div>
          <img style={{ width: '200px', height: '150px' }} src={quote} alt="" />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}

          ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonial;