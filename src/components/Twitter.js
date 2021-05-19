import React from 'react';
import styled from 'styled-components';
import { useTwitter } from '../hooks/useTwitter';
import { getMedia } from '../utils/getMedia';
import { getText } from '../utils/getText';
import Loader from './Loader';
import { Media } from './Media';
import Meta from './Meta';
import TweeterPic from './TweeterPic';
import TweetText from './TweetText';

const TweetContainerStyle = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

const TweetStyle = styled.div`
  background-color: #fff;
  flex: 1;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 20px;
  width: 600px;
  margin-bottom: 20px;
`;

export default function Twitter() {
  // Custom hook to call serverless function getting Tweets
  const tweets = useTwitter();

  console.log(tweets);

  return (
    <TweetContainerStyle>
      {!tweets.length && <Loader />}
      {/* Loop through array of Tweets */}
      {tweets.map((tweet) => {
        //   Get embedded media
        const { media } = getMedia(tweet);
        console.log(media);

        // Tweet body text
        const text = getText(tweet);

        return (
          <TweetStyle key={tweet.id_str}>
            <TweeterPic tweet={tweet} />
            <TweetText text={text} tweetId={tweet.id_str} />
            <Media media={media} alt={text} />
            <Meta
              likes={tweet.retweeted_status.favorite_count}
              retweets={tweet.retweet_count}
            />
          </TweetStyle>
        );
      })}
    </TweetContainerStyle>
  );
}
