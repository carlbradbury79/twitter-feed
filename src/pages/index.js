import * as React from 'react';
import Twitter from '../components/Twitter';
import { IoIosHeart, IoIosRepeat, IoLogoTwitter } from 'react-icons/io';

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        <span className='highlight'>
          <IoLogoTwitter />
          <a
            href='https://twitter.com/surfsup720'
            target='_blank'
            rel='noopener noreferrer'
          >
            @surfsup720's{' '}
          </a>
          Tweets
        </span>
      </h1>
      <Twitter />
    </main>
  );
};

export default IndexPage;
