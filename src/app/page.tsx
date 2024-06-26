'use client';

import * as React from 'react';
import '@/lib/env';

import CallToAction from '@/components/CallToAction';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import HeroIntro from '@/components/HeroIntro';
import HowItWork from '@/components/HowItWork';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Subscribe from '@/components/Subscribe';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroIntro />
      <CallToAction />
      <Features />
      <HowItWork />
      <Pricing />
      <Feedback />
      <FAQ />
      <Subscribe />
      <Footer />
    </>
  );
}
