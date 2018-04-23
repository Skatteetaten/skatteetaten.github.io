import React from 'react'
import Link from 'gatsby-link'

const PostLink = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
