import Post from 'components/templates/Post';
import React, { ComponentType } from 'react';

const PostPreview: ComponentType<any> = ({ entry, widgetFor }) => {
  const content = entry.get('data').toJS();
  content.preview_body = widgetFor('body')

  return (
    <>
      <Post attributes={content} html={''} />
    </>
  )
};

export default PostPreview;
