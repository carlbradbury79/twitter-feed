export function getMedia(tweet) {
  return tweet.retweeted
    ? tweet.retweeted_status.extended_entities
      ? tweet.retweeted_status.extended_entities
      : tweet.retweeted_status.entities
    : tweet.extended_entities
    ? tweet.extended_entities
    : tweet.entities;
}
