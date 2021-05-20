import React from 'react';
import styled from 'styled-components';

const TweeterPicStyle = styled.img`
  border-radius: 20px;
`;

const TweeterPic = ({ tweet }) => {
  console.log(tweet.retweeted);
  return tweet.retweeted ? (
    <TweeterPicStyle src={tweet.retweeted_status.user.profile_image_url} />
  ) : (
    <TweeterPicStyle src={tweet.user.profile_image_url} />
  );
};

export default TweeterPic;
