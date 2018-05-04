let themeLoader = require('@microsoft/load-themed-styles')
themeLoader.configureLoadStyles(styles => {
  // noop
})

let library = require('office-ui-fabric-react/lib/Utilities')
library.setSSR(true)
library.setRTL(false)

const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogTemplate.js')
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create docs pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const slug = _.get(edge, `node.fields.slug`)
          if (!slug) return

          createPage({
            path: `${edge.node.fields.slug}`, // required
            component: slash(blogPostTemplate),
            context: {
              slug: edge.node.fields.slug,
            },
          })
        })
        return
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `docs` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
