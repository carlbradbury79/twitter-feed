import React from 'react';

const TweeterPic = ({ tweet }) => {
  console.log(tweet.retweeted);
  return tweet.retweeted ? (
    <div>
      <img src={tweet.retweeted_status.user.profile_image_url} />
    </div>
  ) : (
    <div>
      <img src={tweet.user.profile_image_url} />
    </div>
  );
};

export default TweeterPic;
