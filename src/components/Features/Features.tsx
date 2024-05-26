import * as React from 'react';

import { FEATURES_DATA } from '@/components/Features/constants';

export default function Features() {
  return (
    <section className='py-10'>
      <div className='container-xl'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-6'>
            <h2 className='display-4 fw-black ff-heading mt-5'>
              You just need some help to get ship done.
            </h2>
            <p className='fs-4 mt-4 fw-light'>
              Like a well-seasoned, results-driven first mate who's the right
              brain to your left. Someone who can help you:{' '}
            </p>
          </div>
        </div>
        <div className='row justify-content-center gap-5 mt-5 mb-5'>
          {FEATURES_DATA.map((row, index) => (
            <div className='col-12 col-lg-5 mt-4' key={index}>
              {row.map(
                ({
                  marginClassName,
                  iconClassName,
                  title,
                  description,
                  subTitle,
                }) => (
                  <div
                    className={`card border border-2 border-primary shadow-brutal-primary ${marginClassName}`}
                    key={title}
                  >
                    <div className='card-body px-4 py-4 px-md-5 py-md-5'>
                      <i className={iconClassName}></i>
                      <p className='fs-5 fw-black'>{title}</p>
                      <p className='mb-3'>{description}</p>
                      <p className='mb-0 fw-bold text-primary'>{subTitle}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
          {/* <div className='col-12 col-lg-5 mt-4'>
            <div className='card border border-2 border-primary shadow-brutal-primary mb-5'>
              <div className='card-body px-4 py-4 px-md-5 py-md-5'>
                <i className='fa-duotone fa-head-side-brain mb-4 text-primary fa-4x'></i>
                <p className='fs-5 fw-black'>
                  Engage with customers and better understand their needs
                </p>
                <p className='mb-3'>
                  so you're equipped with the right insights to identify
                  features that add real value.
                </p>
                <p className='mb-0 fw-bold text-primary'>No guesswork.</p>
              </div>
            </div>
            <div className='card border border-2 border-primary shadow-brutal-primary'>
              <div className='card-body px-4 py-4 px-md-5 py-md-5'>
                <i className='fa-duotone fa-trophy-star mb-4 text-primary fa-4x'></i>
                <p className='fs-5 fw-black'>
                  Generate brand awareness and stand out from the crowd
                </p>
                <p className='mb-3'>
                  with clever visuals, fresh brand assets, and thoughtful
                  multi-channel distribution efforts.
                </p>
                <p className='mb-0 fw-bold text-primary'>More memorable. </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-5 mt-4'>
            <div className='card border border-2 border-primary shadow-brutal-primary my-5'>
              <div className='card-body px-4 py-4 px-md-5 py-md-5'>
                <i className='fa-duotone fa-money-bill-transfer mb-4 text-primary fa-4x'></i>
                <p className='fs-5 fw-black'>
                  Convert more site visitors into paying customers
                </p>
                <p className='mb-3'>
                  using proven design techniques and crystal-clear messaging
                  that resonates.
                </p>
                <p className='mb-0 fw-bold text-primary'>Better clarity.</p>
              </div>
            </div>
            <div className='card border border-2 border-primary shadow-brutal-primary'>
              <div className='card-body px-4 py-4 px-md-5 py-md-5'>
                <i className='fa-duotone fa-face-smile-hearts mb-4 text-primary fa-4x'></i>
                <p className='fs-5 fw-black'>
                  Improve product usability and reduce friction that affects
                  growth
                </p>
                <p className='mb-3'>
                  with simple, quick UX fixes that increase customer
                  satisfaction and retention.
                </p>
                <p className='mb-0 fw-bold text-primary'>Less churn.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
