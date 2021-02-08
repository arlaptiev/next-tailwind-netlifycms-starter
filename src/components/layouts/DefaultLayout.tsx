import Footer from 'components/sections/Footer';
import Header from 'components/sections/Header';
import React, { ReactNode } from 'react';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

const DefaultLayout = (props: Props) => (
  <>
    <Header />
    {props.meta}
    {props.children}
    <Footer />
  </>
);

export default DefaultLayout;
