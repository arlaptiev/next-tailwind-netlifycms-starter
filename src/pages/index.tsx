import React from 'react';

import DefaultLayout from 'components/layouts/DefaultLayout';
import { GetStaticProps, NextPage } from 'next';
import { Meta } from 'utils/Meta';
import { HomeAttributes } from 'interfaces/home';
import Home from 'components/templates/Home';

interface Props {
  content: { attributes: HomeAttributes };
}

const HomePage: NextPage<Props> = ({ content }) => (
  <>
    <DefaultLayout
      meta={<Meta />}
    >
      <Home attributes={content.attributes} />
    </DefaultLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);

  return { props: { content: content.default } };
};

export default HomePage;
