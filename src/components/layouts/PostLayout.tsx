import React, { ReactNode } from 'react';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

const PostLayout = (props: Props) => (
  <>
    {props.meta}
    {props.children}
  </>
);

export default PostLayout;
