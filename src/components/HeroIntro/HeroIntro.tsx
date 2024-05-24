import * as React from 'react';

export default function HeroIntro() {
  return (
    <section className='py-5 mb-5'>
      <div className='container-xl'>
        <div className='row justify-content-center text-center'>
          <div className='col-12 col-md-11 col-lg-8'>
            <span className='badge rounded-pill text-bg-light text-dark text-opacity-75 mb-3 fs-6 py-2 px-3 border border-2 mt-0 mt-md-4'>
              <i className='fas fa-circle-small fa-beat-fade me-2 text-teal'></i>
              Limited slots available
            </span>
            <h1 className='display-1 fw-black ff-heading mt-2 mt-md-3'>
              Make ship happen.
            </h1>
            <p className='fs-4 mt-4 mb-4 fw-light px-0 px-lg-5'>
              Short, focused design and growth collabs for startup tech founders
              that push good code but feel blocked by the other stuff.
            </p>
            <a
              className='btn btn-lg btn-primary border border-dark border-2 ff-heading fw-bold px-4 py-3 mt-4 mb-5'
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
