import * as React from 'react';

export default function CallToAction() {
  return (
    <section className='py-10 bg-light-blue' id='why'>
      <div className='container-xl'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-6'>
            <i className='fa-duotone fa-face-sad-sweat mt-5 text-primary fa-4x'></i>
            <h2 className='display-4 fw-black ff-heading mt-4'>
              Building a business solo is a hard, lonely road.
            </h2>
          </div>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-9 px-lg-4'>
              <p className='fs-4 mt-4 mb-2 fw-light'>
                <span className='fw-black'>
                  Shipping features is easy. Growth is a lot tougher.&nbsp;
                </span>
                You've built a good product, but it won't sell itself. It's all
                on you to learn from customers, optimize for conversion,
                generate brand awareness, and improve product UX... but those
                aren't your core skills. You do the best you can, but inevitably
                hit walls you can't push through on your own. Momentum slows,
                you lose focus, and wonder if the needle is ever going to move.
              </p>
              <p className='fs-4 fw-bold mt-4 mb-5'>
                Here's the good news — it doesn't have to be this way.
              </p>
              <i className='fa-duotone fa-hand-back-point-down mb-5 text-primary fa-3x fa-bounce' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
