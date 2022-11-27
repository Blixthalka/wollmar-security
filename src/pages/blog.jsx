import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Img from 'gatsby-image'
import PostHeader from '../templates/PostHeader'

const Blog = ({ data }) => {
    console.log(data)
    return (
        <Layout className="flex-col">
            <Seo title="blog" />
            <div className="max-w-2xl mx-auto px-5">
                <h1 className="mtext-bg text-gray-800">Blog</h1>
                <h3 className="mtext-md text-gray-500 mt-5">The latest from the Wollmar Security Team.</h3>
            </div>
            <div className="max-w-2xl mx-auto px-5 mt-20 grid gap-20">
                {data.allMdx.edges.map(({ node }) => (
                    <Link to={node.frontmatter.path}>
                        <div className='flex-col items-center rounded hover:cursor-pointer '>
                            <Img fluid={node.frontmatter.image.childImageSharp.fluid} className=" h-44 rounded" />
                            <div className="pt-5">
                                <h4 className="mtext-md text-gray-800">{node.frontmatter.title}</h4>
                                <p className="text-gray-500 mt-5">{node.frontmatter.subtitle}</p>
                                <PostHeader date={node.frontmatter.date} className="mt-5"/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 20) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            subtitle
            path
            image {
                childImageSharp {
                  fluid(quality: 70) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
        }
      }
    }
  }
`

export default Blog;