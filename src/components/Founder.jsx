import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Founder = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto p-5 justify-between">
      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <Img fluid={data.emil.childImageSharp.fluid} className="h-96" imgStyle={{ objectPosition: `top` }} />
        </div>
        <div className='p-5'>
          <p className="text-gray-500">Founder Emil</p>
          <p className="text-gray-800 mtext-md">Companies still emailed me passwords unsecurely in 2022. That's when I realised a better solution was needed.</p>
        </div>
      </div>
    </div>
  );
}


export default function FounderWrapper(props) {
  return (
    <StaticQuery
      query={graphql`
          query {
              emil: file(relativePath: { eq: "emil2.png" }) {
                childImageSharp {
                    fluid(quality: 70) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
      `}
      render={data => <Founder data={data} {...props} />}
    />
  )
}