import React from 'react'
import PostLink from '../components/post-link'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <div>
      <h1>Blogs</h1>
      {Posts}
      <div style={{ marginBottom: '545px' }} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
