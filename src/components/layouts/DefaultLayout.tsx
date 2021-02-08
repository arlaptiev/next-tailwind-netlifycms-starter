import React, { ReactNode } from 'react';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

const DefaultLayout = (props: Props) => (
  <>
    {props.meta}
    {props.children}
  </>
);

export default DefaultLayout;
