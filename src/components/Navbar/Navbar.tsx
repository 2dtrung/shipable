import Image from 'next/image';
import * as React from 'react';

import { navbarListItem } from '@/components/Navbar/constants';

export default function Navbar() {
  const [expand, setExpand] = React.useState(false);

  const handleClickOnHamburger = () => setExpand((prev) => !prev);
  return (
    <nav className='navbar navbar-expand-lg navbar-light px-0 py-3 py-md-4 sticky-top bg-white'>
      <div className='container-xl max-w-screen-xl'>
        <a className='navbar-brand'>
          <Image
            src='svg/shipable-logo.svg'
            alt='Shipable Logo'
            height={48}
            width={162}
          />
        </a>
        <button
          onClick={handleClickOnHamburger}
          className='navbar-toggler'
          type='button'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${expand && 'show'}`}>
          <ul className='navbar-nav ms-lg-auto d-flex align-items-center'>
            {navbarListItem.map(({ text, href, className }) => (
              <li className='nav-item px-0 px-md-2' key={text}>
                <a className={className} href={href}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
