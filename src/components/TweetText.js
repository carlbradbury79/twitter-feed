import React from 'react';

const TweetText = ({ text, tweetId }) => {
  return (
    <div>
      <p>
        <a
          className='tweet-link'
          rel='noopener noreferrer'
          target='_blank'
          href={`https://twitter.com/surfsup720/status/${tweetId}`}
        >
          {text}
        </a>
      </p>
    </div>
  );
};

export default TweetText;
