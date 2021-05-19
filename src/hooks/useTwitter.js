import React, { useState, useEffect } from 'react';

const url = `/.netlify/functions/twitter`;

// Call the serverless function on mount and set to state
export function useTwitter() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return posts;
}
