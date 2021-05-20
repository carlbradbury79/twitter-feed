import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p`
  margin: 0;
`;

const TweetText = ({ text, tweetId }) => {
  return (
    <div>
      <TextStyle>
        {/* <a
          className='tweet-link'
          rel='noopener noreferrer'
          target='_blank'
          href={`https://twitter.com/surfsup720/status/${tweetId}`}
        > */}
        {text}
        {/* </a> */}
      </TextStyle>
    </div>
  );
};

export default TweetText;
