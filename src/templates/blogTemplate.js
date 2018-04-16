import React from 'react'
import Breadcrumb from 'aurora-frontend-react-komponenter/innhold/Breadcrumb/Breadcrumb'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { path, frontmatter, html } = markdownRemark
  return (
    <div>
      <div>
        <Breadcrumb
          path={path}
          renderLink={({ href, name }) => <a href={href}>{name}</a>}
        />
      </div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
