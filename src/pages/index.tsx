import React from 'react';

import { Default } from 'components/layouts/Default';
import BlogSection from 'components/sections/BlogSection';
import FeatureSection from 'components/sections/FeatureSection';
import HeroSection from 'components/sections/HeroSection';
import PricingSection from 'components/sections/PricingSection';
import StepsSection from 'components/sections/StepsSection';
import TeamSection from 'components/sections/TeamSection';
import { HomeAttributes } from 'interfaces/home';
import { GetStaticProps } from 'next';
import { Meta } from 'utils/Meta';

interface Props {
  content: { attributes: HomeAttributes };
}

const HomePage = (props: Props) => {
  const { attributes } = props.content;

  return (
    <>
      <Default
        meta={
          <Meta description="Next js Boilerplate is the perfect starer code for your project. Build your React application with Next.js framework." />
        }
      >
        <HeroSection
          version={attributes.hero_version}
          title={attributes.hero_title}
          description={attributes.hero_description}
          image={attributes.hero_image}
        />
        <FeatureSection
          version={attributes.feature_version}
          title={attributes.feature_title}
          description={attributes.feature_description}
          features={attributes.features}
        />
        <StepsSection
          version={attributes.steps_version}
          steps={attributes.steps}
          image={attributes.steps_image}
        />
        <PricingSection
          title={attributes.pricing_title}
          description={attributes.pricing_description}
          plans={attributes.plans}
        />
        <TeamSection
          version={attributes.team_version}
          title={attributes.team_title}
          description={attributes.team_description}
          team={attributes.team}
        />
        <BlogSection
          version={attributes.blog_version}
          title={attributes.blog_title}
          description={attributes.blog_description}
          slugs={attributes.posts}
        />
      </Default>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);

  return { props: { content: content.default } };
};

export default HomePage;
