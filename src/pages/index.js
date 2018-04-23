import React from 'react'
import PostLink from '../components/post-link'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <div>
      {Posts}
      <div style={{ marginBottom: '630px' }} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
