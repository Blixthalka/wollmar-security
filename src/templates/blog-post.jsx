import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import React from "react"
import Layout from '../components/Layout'
import SEO from '../components/seo'
import BackIcon from '../images/back.svg'
import './post.scss'
import PostHeader from './PostHeader'
import Img from 'gatsby-image'

export default function Template({ data, children }) {
  console.log(data)
  const mdx = data.mdx;

  return (
    <div>
      <Layout className="max-w-2xl mx-auto mt-5 px-5">
        <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />

        <Img fluid={mdx.frontmatter.image.childImageSharp.fluid} className="mb-5 h-72 rounded" />
        <h1 className="font-bold mtext-bg text-gray-800">{mdx.frontmatter.title}</h1>

        <div className="inner-blogg">
          {mdx.frontmatter.subtitle && <p className="mtext-md text-gray-500">{mdx.frontmatter.subtitle}</p>}
          <PostHeader date={mdx.frontmatter.date} className="py-5 border-y my-5 " />

          <MDXProvider>
            {children}
          </MDXProvider>
        </div>
        <button className="bg-gray-50 p-1 text-gray-500 group hover:text-bloghalka-main block border rounded hover:bg-gray-100">

          <Link to="/blog" className="flex justify-center">
            <div className="flex space-x-2">
              <BackIcon className="fill-gray-500 group-hover:fill-bloghalka-main" />
            </div>
          </Link>

        </button>
      </Layout>
    </div >
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        subtitle
        title
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
`