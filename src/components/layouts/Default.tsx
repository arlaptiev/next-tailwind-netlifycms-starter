import React, { ReactNode } from 'react';

type DefaultProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Default = (props: DefaultProps) => (
  <>
    {props.meta}
    {props.children}
  </>
);

export { Default };
