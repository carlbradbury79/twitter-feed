export function getText(tweet) {
  return tweet.retweeted
    ? `${tweet.full_text
        .split(':')
        .shift()}: ${tweet.retweeted_status.full_text
        .split('https://t.co')
        .shift()}`
    : tweet.full_text.split('https://t.co').shift();
  //   .slice(0, 200);
}
