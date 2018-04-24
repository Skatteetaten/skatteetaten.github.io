import React from 'react'
import Breadcrumb from 'aurora-frontend-react-komponenter/innhold/Breadcrumb/Breadcrumb'
import Grid from 'aurora-frontend-react-komponenter/beholdere/Grid/Grid'
import Link from 'gatsby-link'

const mainGrid = {
  sm: 10,
  smPush: 1,
  md: 10,
  mdPush: 1,
  lg: 8,
  lgPush: 2,
  xl: 6,
  xxl: 6,
}

const menuGrid = {
  xl: 2,
  xxl: 2,
}

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, fields, html, tableOfContents } = markdownRemark
  return (
    <Grid className="ske-main-layout">
      <Grid.Row>
        <Grid.Col {...menuGrid}>
          {tableOfContents && (
            <div>
              <h3>Table of contents</h3>
              <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
            </div>
          )}
        </Grid.Col>
        <Grid.Col {...mainGrid}>
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
            <div className="main-content">
              <h1>{frontmatter.title}</h1>
              {frontmatter.date && <h2>{frontmatter.date}</h2>}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
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
