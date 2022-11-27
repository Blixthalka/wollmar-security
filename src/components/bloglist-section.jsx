import React from "react"
import BlogListItem from "./bloglist-item"


const BloggListSection = ({ data, style }) => {
    return (
        <div>
            <div className="grid gap-2">
                {data.allMdx.edges.map(({ node }) => (
                    <BlogListItem node={node} />
                ))}
            </div>
        </div>
    )
}

export default BloggListSection