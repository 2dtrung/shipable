import * as React from 'react';

export default function Pricing() {
  return (
    <section className='py-10' id='pricing'>
      <div className='container-xl'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-7'>
            <h2 className='display-4 fw-black ff-heading mt-5'>
              Simple, transparent pricing.
            </h2>
            <p className='fs-4 mt-4 fw-light'>
              Low risk, quick turnaround, fixed price engagements.
            </p>
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 my-5'>
          <div className='col my-3'>
            <div className='card border border-2 border-dark shadow-brutal-dark h-100'>
              <div className='card-body px-4 py-4'>
                <i className='fa-duotone fa-money-bill-transfer mb-3 text-primary fa-2x'>
                  {' '}
                </i>
                <h3 className='fs-3 fw-black ff-heading mb-4'>Conversion</h3>
                <p className='fs-5 mb-4 fw-light'>
                  Accelerate growth with a landing page audit
                </p>
                <div className='price-block my-4'>
                  <p className='display-4 fw-black ff-heading mb-0'>$249</p>
                  <p className='mb-0'>One time</p>
                </div>
                <a
                  className='btn btn-white border border-dark border-2 fw-black ff-heading fs-5 py-3 w-100 mb-4'
                  href='/request'
                >
                  Select Service
                </a>
                <p className='fw-bold my-2'>What's included:</p>
                <ul className='list-group list-group-flush mb-2'>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    15 minute video call
                  </li>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    Comprehensive annotated screenshot audit
                  </li>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    Private video walkthrough of 3 top priority fixes
                  </li>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    48-hour turnaround
                  </li>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    No-risk guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col my-3'>
            <div className='card border border-2 border-primary shadow-brutal-primary bg-light-blue h-100'>
              <div className='card-body px-4 py-4'>
                <i className='fa-duotone fa-trophy-star mb-3 text-primary fa-2x'></i>
                <h3 className='fs-3 fw-black ff-heading mb-1 mb-4'>Brand</h3>
                <p className='fs-5 mb-4 fw-light text-opacity-75'>
                  Stand out with a custom brand package
                </p>
                <div className='price-block my-4'>
                  <p className='display-4 fw-black ff-heading mb-0'>$379</p>
                  <p className='mb-0 text-opacity-75'>One time</p>
                </div>
                <a
                  className='btn btn-transparent-blue border border-primary border-2 fw-black ff-heading fs-5 py-3 w-100 mb-4'
                  href='request'
                >
                  Select Service
                </a>
                <p className='fw-bold my-2'>What's included:</p>
                <ul className='list-group list-group-flush mb-2'>
                  <li className='list-group-item bg-light-blue ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    15 minute video call
                  </li>
                  <li className='list-group-item bg-light-blue ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    1 x human-crafted logo
                  </li>
                  <li className='list-group-item bg-light-blue ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    Suggested font pairings and color palette
                  </li>
                  <li className='list-group-item bg-light-blue ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    Social avatar, banner and open graph image
                  </li>
                  <li className='list-group-item bg-light-blue ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    Async feedback
                  </li>
                  <li className='list-group-item bg-light-blue ps-0 pb-0 border-0 d-flex align-items-start'>
                    <i className='fa-duotone fa-circle-check text-primary me-2 mt-1'></i>
                    48-hour turnaround
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col my-3'>
            <div className='card border border-2 border-dark shadow-brutal-dark bg-primary h-100'>
              <div className='card-body px-4 py-4'>
                <i className='fa-duotone fa-head-side-brain mb-3 text-white text-opacity-75 fa-2x'></i>
                <h3 className='fs-3 fw-black ff-heading mb-4 text-white'>
                  Research
                </h3>
                <p className='fs-5 fw-light mb-4 text-white text-opacity-75'>
                  Learn from your customers with a CX survey
                </p>
                <div className='price-block my-4'>
                  <p className='display-4 fw-black ff-heading mb-0 text-white'>
                    $529
                  </p>
                  <p className='mb-0 text-white text-opacity-75'>One time</p>
                </div>
                <a
                  className='btn btn-primary border border-dark border-2 fw-black ff-heading fs-5 py-3 w-100 mb-4'
                  href='/request'
                >
                  Select Service
                </a>
                <p className='fw-bold my-2 text-white'>What's included:</p>
                <ul className='list-group list-group-flush mb-2'>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start bg-primary'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>30 minute video call</span>
                  </li>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start bg-primary'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>
                      20-25 question survey tailored to your product
                    </span>
                  </li>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start bg-primary'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>
                      Help with distribution and recruitment
                    </span>
                  </li>
                  <li className='list-group-item ps-0 pb-0 border-0 d-flex align-items-start bg-primary'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>
                      Survey results with insights and suggestions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col my-3'>
            <div className='card border border-2 border-primary shadow-brutal-primary bg-dark h-100'>
              <div className='card-body px-4 py-4'>
                <i className='fa-duotone fa-face-smile-hearts mb-3 text-white text-opacity-75 fa-2x'></i>
                <h3 className='fs-3 fw-black ff-heading mb-1 text-white mb-4'>
                  Product
                </h3>
                <p className='fs-5 mb-4 fw-light text-white text-opacity-75'>
                  Improve user satisfaction with a UX audit
                </p>
                <div className='price-block my-4'>
                  <p className='display-4 fw-black ff-heading mb-0 text-white'>
                    $799
                  </p>
                  <p className='mb-0 text-white text-opacity-75'>One time</p>
                </div>
                <a
                  className='btn btn-transparent-blue border border-primary border-2 fw-black ff-heading fs-5 py-3 w-100 text-white mb-4'
                  href='request'
                >
                  Select Service
                </a>
                <p className='fw-bold my-2 text-white'>What's included:</p>
                <ul className='list-group list-group-flush mb-2'>
                  <li className='list-group-item bg-primary ps-0 pb-0 border-0 d-flex align-items-start bg-dark'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>30 minute video call</span>
                  </li>
                  <li className='list-group-item bg-primary ps-0 pb-0 border-0 d-flex align-items-start bg-dark'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>
                      Quick fix suggestions to optimize 1 user flow
                    </span>
                  </li>
                  <li className='list-group-item bg-primary ps-0 pb-0 border-0 d-flex align-items-start bg-dark'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>
                      Visual examples and annotations
                    </span>
                  </li>
                  <li className='list-group-item bg-primary ps-0 pb-0 border-0 d-flex align-items-start bg-dark'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>Async feedback</span>
                  </li>
                  <li className='list-group-item bg-primary ps-0 pb-0 border-0 d-flex align-items-start bg-dark'>
                    <i className='fa-duotone fa-circle-check text-white me-2 mt-1'></i>
                    <span className='text-white'>No-risk guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col-7 text-center'>
            <p className='fs-5 fw-light mb-4'>
              Need clarification on what's included?&nbsp;
              <a href='mailto:hey@shipable.io?subject=Question%20about%20your%20services'>
                Questions are free
              </a>
              !{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
