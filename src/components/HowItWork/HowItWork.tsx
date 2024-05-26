import * as React from 'react';

export default function HowItWork() {
  return (
    <section className='py-10 bg-light-blue' id='process'>
      <div className='container-xl'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-7'>
            <h2 className='display-4 fw-black ff-heading mt-5'>
              Here's how it works.
            </h2>
            <p className='fs-4 mt-4 fw-light mb-4'>
              No time-consuming sales cycles or precious resources wasted.
            </p>
          </div>
        </div>
        <div className='row justify-content-center text-center mt-5 mb-5'>
          <div className='col-12 col-lg-4 px-5'>
            <i className='fa-duotone fa-list-radio my-4 text-primary fa-4x'></i>
            <p className='fs-4 fw-bold'>Choose a service</p>
            <p className='fs-5 fw-light'>
              We'll sync up to discuss your needs and plot a course of action.
            </p>
          </div>
          <div className='col-12 col-lg-4 px-5'>
            <i className='fa-duotone fa-person-digging my-4 text-primary fa-4x'></i>
            <p className='fs-4 fw-bold'>Work gets done</p>
            <p className='fs-5 fw-light'>
              Engage in the feedback loop as needed with async comms.
            </p>
          </div>
          <div className='col-12 col-lg-4 px-5'>
            <i className='fa-duotone fa-ship my-4 text-primary fa-4x'></i>
            <p className='fs-4 fw-bold'>Ship happens</p>
            <p className='fs-5 fw-light'>
              Once everything is shaped up, you're all set to get it shipped
              out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
