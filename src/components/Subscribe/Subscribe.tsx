import * as React from 'react';

export default function Subscribe() {
  return (
    <section className='py-10 bg-light-blue'>
      <div className='container-xl'>
        <div className='row justify-content-center text-center'>
          <div className='col-12 col-md-10 col-lg-7'>
            <i className='fas fa-circle-small fa-beat-fade me-2 text-teal'></i>
            <span>Limited slots available</span>
            <h2 className='display-4 fw-black ff-heading mt-2 mt-md-3'>
              Let's get your business moving forward again.
            </h2>
            <p className='fs-4 mt-4 mb-4 fw-light'>
              To ensure quality of work, concurrent engagements are limited.
            </p>
            <a
              className='btn btn-lg btn-primary border border-dark border-2 ff-heading fw-bold px-4 py-3 mt-4'
              href='/request'
            >
              <i className='fa-solid fa-sailboat me-2'></i>Get unblocked today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
