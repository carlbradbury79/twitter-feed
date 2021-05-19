import React from 'react';
import { IoIosHeart, IoIosRepeat, IoLogoTwitter } from 'react-icons/io';

// Tweet Meta data - like and tweet counts
const Meta = ({ likes, retweets }) => {
  console.log({ likes, retweets });
  return (
    <div>
      <span title={`${retweets} Retweets`}>
        <IoIosRepeat />
        {retweets}
      </span>
      <span className='lilguy' />
      <span title={`${likes} Hearts`}>
        <IoIosHeart className='heart' />
        {likes}
      </span>
    </div>
  );
};

export default Meta;
