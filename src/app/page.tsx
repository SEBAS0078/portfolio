'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import styles from "./(customer)/customer/styles/home.module.css"; 
import IntResizing  from "./(customer)/customer/components/IntResizing"; 

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hemly</title>
      </Head>
      <div className={styles.title}>
        <h1>Hemly</h1>
        <p>The best decentralized clothing alteration platform</p>
      </div>
      <section className='bg-white'>
        <div className= {styles.mainContainer}>
          <div className="resizing">
            <p>Interactive Resizing Placeholder</p>
              <IntResizing/>
          </div>
          <div className="options">
            <p>Resizing Options Placeholder</p>
          </div>
          <div className="navBar">
            <p>NavBar Placeholder</p>
          </div>
        </div>
        
      </section>
                {/* <ButtonLink className='mt-6' href='/components' variant='light'>
            See all components
          </ButtonLink>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
              Hemly
            </UnderlineLink>
          </footer> */}
    </main>
  );
}
