import React from 'react'
import Breadcrumb from 'aurora-frontend-react-komponenter/innhold/Breadcrumb/Breadcrumb'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div
        style={{
          paddingTop: '15px',
        }}
      >
        <Breadcrumb
          path={frontmatter.path}
          renderLink={({ href, name }) => (
            <Link to={href} style={{ border: 'none' }}>
              {name}
            </Link>
          )}
        />
      </div>
      <div className="main-content">
        <h1>{frontmatter.title}</h1>
        {frontmatter.date && <h2>{frontmatter.date}</h2>}
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
