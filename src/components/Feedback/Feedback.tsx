import Image from 'next/image';
import * as React from 'react';

export default function Feedback() {
  return (
    <section className='py-10 bg-light-blue'>
      <div className='container-xl'>
        <div className='row justify-content-center text-center'>
          <div className='col-md-8'>
            <h2 className='display-4 fw-black ff-heading my-5'>
              Words from happy founders
            </h2>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-11'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3'>
              <div className='col my-3'>
                <div className='card h-100 border border-2 border-primary shadow-brutal-primary'>
                  <div className='card-body px-4 pt-4 pb-0 px-md-5 pt-md-5'>
                    <Image
                      src='svg/copylime-logo.svg'
                      alt='copylime'
                      width={48}
                      height={48}
                    />
                    <p className='fs-4 fw-bold my-5'>
                      “There's no way I could have created content like this
                      that's so visually connected to my product's purpose.”
                    </p>
                  </div>
                  <div className='card-footer px-4 pb-4 pt-0 px-md-5 pb-md-5 bg-white border-0'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0'>
                        <img
                          className='img-avatar'
                          src='https://pbs.twimg.com/profile_images/1490075268928655364/L-PTx3nW_400x400.jpg'
                          alt='...'
                        />
                      </div>
                      <div className='flex-grow-1 ms-3'>
                        <p className='fw-bold mb-0'>Peter Mick</p>
                        <p className='fw-light mb-0'>
                          Founder @&nbsp;
                          <a
                            className='text-dark text-decoration-none'
                            href='/'
                          >
                            Copylime
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col my-3'>
                <div className='card h-100 border border-2 border-primary shadow-brutal-primary'>
                  <div className='card-body px-4 pt-4 pb-0 px-md-5 pt-md-5'>
                    <Image
                      src='svg/peeks-logo.svg'
                      alt='peeks-logo'
                      width={48}
                      height={48}
                    />
                    <p className='fs-4 fw-bold my-5'>
                      “The worst part about bootstrapping is it's all on you.
                      With Shipable, you get a cofounder to jump in and help,
                      but only when you need it.”
                    </p>
                  </div>
                  <div className='card-footer px-4 pb-4 pt-0 px-md-5 pb-md-5 bg-white border-0'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0'>
                        <img
                          className='img-avatar'
                          src='https://pbs.twimg.com/profile_images/1559203946094288896/7apbcwga_400x400.jpg'
                          alt='...'
                        />
                      </div>
                      <div className='flex-grow-1 ms-3'>
                        <p className='fw-bold mb-0'>Rik Nieu</p>
                        <p className='fw-light mb-0'>
                          Founder @&nbsp;
                          <a
                            className='text-dark text-decoration-none'
                            href='/'
                          >
                            Peeks
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col my-3'>
                <div className='card h-100 border border-2 border-primary shadow-brutal-primary'>
                  <div className='card-body px-4 pt-4 pb-0 px-md-5 pt-md-5'>
                    <Image
                      src='svg/userforge-logo.svg'
                      alt='userforge'
                      width={48}
                      height={48}
                    />
                    <p className='fs-4 fw-bold my-5'>
                      “Genuinely helpful feedback and quick fix ideas that got
                      me moving things forward again. Awesome service.”
                    </p>
                  </div>
                  <div className='card-footer px-4 pb-4 pt-0 px-md-5 pb-md-5 bg-white border-0'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0'>
                        <img
                          className='img-avatar'
                          src='https://pbs.twimg.com/profile_images/1372393019719098369/0jeZCIlc_400x400.jpg'
                          alt='...'
                        />
                      </div>
                      <div className='flex-grow-1 ms-3'>
                        <p className='fw-bold mb-0'>Alvin Engler</p>
                        <p className='fw-light mb-0'>
                          Founder @&nbsp;
                          <a
                            className='text-dark text-decoration-none'
                            href='/'
                          >
                            Userforge
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center text-center mt-3'>
              <div className='col-md-8'>
                <a
                  className='btn btn-lg btn-primary border border-dark border-2 ff-heading fw-bold px-4 py-3 mt-5 mb-5'
                  href='/request'
                >
                  <i className='fa-solid fa-sailboat me-2'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
