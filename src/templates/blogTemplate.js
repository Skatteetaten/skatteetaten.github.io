import React from 'react'
import Breadcrumb from 'aurora-frontend-react-komponenter/innhold/Breadcrumb/Breadcrumb'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, fields, html, tableOfContents } = markdownRemark
  return (
    <div>
      <div
        style={{
          paddingTop: '15px',
        }}
      >
        <Breadcrumb
          path={fields.slug}
          renderLink={({ href, name }) => (
            <Link to={href} style={{ border: 'none' }}>
              {name}
            </Link>
          )}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      <div className="main-content">
        <h1>{frontmatter.title}</h1>
        {frontmatter.date && <h2>{frontmatter.date}</h2>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
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
`
