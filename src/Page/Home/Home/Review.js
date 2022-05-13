import React from 'react';

const Review = ({ review }) => {
  return (

    <div class="card lg:max-w-lg bg-base-100 shadow-xl scroll-mt-36 px-12">


      <div class="card-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione laborum quas aspernatur omnis recusandae fugit, fugiat deleniti sunt exercitationem?</p>
        <div className="flex py-6">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} className="text-7xl" alt="" />
            </div>
          </div>
          <div className='mx-5 '>
            <h2 className='text-3xl font-bold text-accent'>{review.name}</h2>
            <h4>{review.city}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;