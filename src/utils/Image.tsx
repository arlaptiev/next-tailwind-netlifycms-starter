import React from 'react';

import NextImage from 'next/image';

const CoverImage = (props: any) => (
  <NextImage
    layout="fill"
    objectFit="cover"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export default CoverImage; 
