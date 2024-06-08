import * as React from 'react';

import { FAQ_LIST } from '@/components/FAQ/constants';

export default function FAQ() {
  const [activeFAQ, setActiveFAQ] = React.useState(null);
  const [isCollapsing, setIsCollapsing] = React.useState(false);

  const handleClickFAQItem = (index: any): any => {
    if (activeFAQ === index) {
      setIsCollapsing(true);
      setTimeout(() => {
        setActiveFAQ(null);
        setIsCollapsing(false);
      }, 100);
    } else {
      setIsCollapsing(true);
      setTimeout(() => {
        setActiveFAQ(index);
        setIsCollapsing(false);
      }, 100);
    }
  };

  return (
    <section className='py-10 my-5' id='faq'>
      <div className='container-xl'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <h2 className='display-4 fw-black ff-heading mb-5 text-center'>
              FAQs
            </h2>
            <div className='accordion d-grid gap-3' id='faqs'>
              {FAQ_LIST.map(({ question, answer }, index) => (
                <div
                  className='accordion-item border-0'
                  key={index}
                  onClick={() => handleClickFAQItem(index)}
                >
                  <h2
                    className='accordion-header rounded-6'
                    id={`faq-${index}`}
                  >
                    <button
                      className='accordion-button collapsed border border-dark border-2 shadow-brutal-dark rounded-6 bg-white px-4'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='false'
                      aria-controls='collapseOne'
                    >
                      <span className='fs-5 fw-bold my-3'>{question}</span>
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeFAQ === index && !isCollapsing ? 'show' : ''
                    } ${isCollapsing ? 'collapsing' : ''}`}
                    id='collapseOne'
                    aria-labelledby={`faq-${index}`}
                    data-bs-parent='#faqs'
                    style={isCollapsing ? { height: '260px' } : {}}
                  >
                    <div className='accordion-body px-4'>
                      <p className='fs-5 mt-3'>{answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
