import Image from 'next/image';
import * as React from 'react';

export default function Footer() {
  return (
    <section className='py-3'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-4 my-3'>
            <div className='d-flex align-items-center justify-content-center justify-content-md-start'>
              <a className='me-1' href='/'>
                <Image
                  src='svg/shipable-mark.svg'
                  alt='Shipable Logo'
                  height={40}
                  width={34}
                />
              </a>
            </div>
          </div>
          <div className='col-12 col-md-4 my-3'>
            <div className='d-flex align-items-center justify-content-center'>
              <p className='mb-0'>© 2024 Shipable. All rights reserved.</p>
            </div>
          </div>
          <div className='col-12 col-md-4 my-3'>
            <div className='d-flex justify-content-center justify-content-md-end align-items-center'>
              <a href='https://twitter.com/makeitshipable' target='_blank'>
                <span className='fa-stack fa-1x'>
                  <i className='fa-brands fa-twitter fa-stack-1x text-white' />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
