import React from 'react';
import { IoIosHeart, IoIosRepeat, IoLogoTwitter } from 'react-icons/io';
import styled from 'styled-components';

const MetaStyles = styled.div`
  grid-column: 1 / 4;
`;

// Tweet Meta data - like and tweet counts
const Meta = ({ likes, retweets }) => {
  console.log({ likes, retweets });
  return (
    <MetaStyles>
      <span title={`${retweets} Retweets`}>
        <IoIosRepeat />
        {retweets}
      </span>
      <span className='lilguy' />
      <span title={`${likes} Hearts`}>
        <IoIosHeart className='heart' />
        {likes}
      </span>
    </MetaStyles>
  );
};

export default Meta;
