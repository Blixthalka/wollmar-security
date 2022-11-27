import React from 'react'
import Guide from '../components/Guide';
import Landing from '../components/Landing';
import Layout from '../components/Layout'
import Pricing from '../components/Pricing';
import Founder from '../components/Founder';
import Faq from '../components/Faq';
import Seo from '../components/seo'

const Index = ({ data }) => {
  return (
    <Layout className="flex-col space-y-32">
      <Seo title="home" />
      <Landing />
      <Guide />
      <Pricing />
      <Founder />
      <Faq />
    </Layout>
  );
}

export default Index;