import React from 'react';
import { Image } from 'mdx-deck';

const Provider = ({ children, index, length }) => {
  return (
    <div>
      {children}
      <div
        css={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          margin: 16,
          color: '#00000099',
        }}
      >
        Patrick Wozniak
      </div>
      <div
        css={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          margin: 16,
        }}
      >
        <Image
          src="./cegeka-logo.webp"
          style={{ width: 127, height: 39, opacity: 0.7 }}
        />
      </div>
    </div>
  );
};

export default {
  Provider,
};
