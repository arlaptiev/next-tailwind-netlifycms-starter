import Home from 'components/templates/Home';
import React, { ComponentType } from 'react';

const HomePreview: ComponentType<any> = ({ entry }) => {
  const content = entry.get('data').toJS();

  return (
    <>
      <Home attributes={content} />
    </>
  );
};

export default HomePreview;
