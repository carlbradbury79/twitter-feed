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
  flex: 1;
  padding: 0 12px;
  border: 1px solid var(--grey);
  width: 600px;
  margin-bottom: 20px;
  display: grid;
  grid-template: auto 1fr / auto 1fr;
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
            <div>
              <TweetText text={text} tweetId={tweet.id_str} />
              <Media media={media} alt={text} />
            </div>
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
