import * as React from 'react';

export default function FAQ() {
  return (
    <section className='py-10 my-5' id='faq'>
      <div className='container-xl'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <h2 className='display-4 fw-black ff-heading mb-5 text-center'>
              FAQs
            </h2>
            <div className='accordion d-grid gap-3' id='faqs'>
              <div className='accordion-item border-0'>
                <h2 className='accordion-header rounded-6' id='faq-1'>
                  <button
                    className='accordion-button collapsed border border-dark border-2 shadow-brutal-dark rounded-6 bg-white px-4'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='false'
                    aria-controls='collapseOne'
                  >
                    <span className='fs-5 fw-bold my-3'>
                      What do you need from me to get started?
                    </span>
                  </button>
                </h2>
                <div
                  className='accordion-collapse collapse'
                  id='collapseOne'
                  aria-labelledby='faq-1'
                  data-bs-parent='#faqs'
                >
                  <div className='accordion-body px-4'>
                    <p className='fs-5 mt-3'>
                      The first step is to&nbsp;
                      <a href='/request'>share some details</a>&nbsp;about your
                      product, current struggles, and what you're hoping to
                      achieve.
                    </p>
                    <p className='fs-5 mt-3'>
                      Assuming we're a good fit to work together, we'll get
                      payment out of the way and then hop on a kick-off call to
                      get to know each other and suss out the details of the
                      work. After that, we'll dive right in and start making
                      ship happen for your business.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item border-0'>
                <h2 className='accordion-header rounded-6' id='faq-2'>
                  <button
                    className='accordion-button collapsed border border-dark border-2 shadow-brutal-dark rounded-6 bg-white px-4'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    <span className='fs-5 fw-bold my-3'>
                      How do you handle feedback?
                    </span>
                  </button>
                </h2>
                <div
                  className='accordion-collapse collapse'
                  id='collapseTwo'
                  aria-labelledby='faq-2'
                  data-bs-parent='#faqs'
                >
                  <div className='accordion-body px-4'>
                    <p className='fs-5 mt-3'>
                      The feedback loop is always open and the format is
                      amenable to the way you want to work. If asychronous video
                      walkthroughs are your jam, not a problem. Would you rather
                      ping pong ideas and assets back and forth on Discord?
                      That's cool too. It's your call.
                    </p>
                    <p className='fs-5 mt-3'>
                      There's no ego here. This is about you and what you want
                      to accomplish for your business. As long as you're
                      involved, happy, and we keep things moving forward, that's
                      what matters.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item border-0'>
                <h2 className='accordion-header rounded-6' id='faq-3'>
                  <button
                    className='accordion-button collapsed border border-dark border-2 shadow-brutal-dark rounded-6 bg-white px-4'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    <span className='fs-5 fw-bold my-3'>
                      No risk guarantee... what's the catch?
                    </span>
                  </button>
                </h2>
                <div
                  className='accordion-collapse collapse'
                  id='collapseThree'
                  aria-labelledby='faq-3'
                  data-bs-parent='#faqs'
                >
                  <div className='accordion-body px-4'>
                    <p className='fs-5 mt-3'>
                      No catch. I know your time and resources aren't inifite
                      and you have to be smart with your monthly spend. I also
                      know the realized savings and future profit from a
                      Shipable sprint will dwarf the cost of the service itself.
                    </p>
                    <p className='fs-5 mt-3'>
                      I'm so confident in my ability to help you solve your
                      product design and/or growth challenges, I'll refund you
                      the cost of the engagement if you see no measurable
                      difference after 30 days.*
                    </p>
                    <p className='fs-5 mt-3 fw-bold'>
                      So you've got nothing to lose - you can only win.
                      <i className='fa-duotone fa-rocket-launch text-primary ms-2'></i>
                    </p>
                    <p className='fs-6 mt-4 fw-light'>
                      * Only applicable to Conversion and Product services.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item border-0'>
                <h2 className='accordion-header rounded-6' id='faq-4'>
                  <button
                    className='accordion-button collapsed border border-dark border-2 shadow-brutal-dark rounded-6 bg-white px-4'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseFour'
                  >
                    <span className='fs-5 fw-bold my-3'>
                      Am I a good fit for your service?
                    </span>
                  </button>
                </h2>
                <div
                  className='accordion-collapse collapse'
                  id='collapseFour'
                  aria-labelledby='faq-4'
                  data-bs-parent='#faqs'
                >
                  <div className='accordion-body px-4'>
                    <p className='fs-5 mt-3'>
                      Shipable services are primarily for tech founders that
                      want to convert more visitors into customers with a high
                      performance website, exceptional product design, and a
                      memorable brand, but lack the necessary time, skill,
                      and/or expertise to do it all on their own.
                    </p>
                    <p className='fs-5 mt-3 fw-bold'>
                      If the above describes you, then yes, you're a good fit.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item border-0'>
                <h2 className='accordion-header rounded-6' id='faq-5'>
                  <button
                    className='accordion-button collapsed border border-dark border-2 shadow-brutal-dark rounded-6 bg-white px-4'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseFive'
                  >
                    <span className='fs-5 fw-bold my-3'>
                      Who's steering this ship anyway?
                    </span>
                  </button>
                </h2>
                <div
                  className='accordion-collapse collapse'
                  id='collapseFive'
                  aria-labelledby='faq-5'
                  data-bs-parent='#faqs'
                >
                  <div className='accordion-body px-4'>
                    <p className='fs-5 mt-3'>
                      You might be surprised to hear this, but Shipable is
                      currently just a one man crew. I guess you could say I'm
                      the captain of my own ship. This means you'll work
                      directly with&nbsp;
                      <a href='https://mattfarley.ca' target='_blank'>
                        me, the founder of Shipable
                      </a>
                      .{' '}
                    </p>
                    <p className='fs-5 mt-3'>
                      I've been designing products and improving user experience
                      for agencies, startups, and small businesses for over 10
                      years. I've built and sold a few SaaS products of my own,
                      and mentored 200+ designers through intensive 3-6 month UX
                      bootcamps and other short courses.
                    </p>
                    <p className='fs-5 mt-3'>
                      <span className='fw-bold'>TL;DR</span>&nbsp;— I know a
                      thing or two because I've done a thing or two, and I'll
                      put all my collective experience and knowledge into every
                      collaboration to help you build, ship, and sell better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
