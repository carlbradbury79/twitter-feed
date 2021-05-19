import React from 'react';
// Take images from Tweet and serve up small images
export function Media({ media, alt }) {
  if (!media) return null;

  // const url = media[0].media_url_https;
  // const parts = url.split('.');
  // const base = parts.slice(0, parts.length - 1).join('.');
  // const thumb = `${url}?name=thumb&format=jpg`;
  return (
    <div>
      {media.map((image) => {
        const url = image.media_url_https;
        const thumb = `${url}?name=thumb&format=jpg`;
        return (
          <img
            src={`https://images.weserv.nl/?url=${encodeURIComponent(
              thumb
            )}&h=150`}
            alt={alt}
            className='media'
            width='150'
            height='150'
          />
        );
      })}
    </div>
  );
}
