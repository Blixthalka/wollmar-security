import { Link } from "gatsby"
import React from "react"
import PostHeader from '../templates/PostHeader'
import BackIcon from '../images/circle.svg'
import Img from 'gatsby-image'

const BlogListItem = ({ node }) => {
    return (
        <Link to={node.frontmatter.path} className="group flex space-x-2">

            <div className="grid gap-2 text-bloghalka-main py-3">
                <p className="text-xl font-bold"> {node.frontmatter.title}</p>
                {node.frontmatter.subtitle && <p className="paragraph ">{node.frontmatter.subtitle}</p>}
                <PostHeader date={node.frontmatter.date} timeToRead={node.timeToRead} />
            </div >
        </Link >
    )
}

export default BlogListItem