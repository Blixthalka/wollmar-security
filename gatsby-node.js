const path = require(`path`)

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`./src/templates/blog-post.jsx`)

    const result = await graphql(`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  }
  `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        console.log("CREATING PAGE " + node.id);
        createPage({
            path: node.frontmatter.path,
            component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: { id: node.id },
        })
    })
}