import React from 'react'
import { graphql } from 'gatsby'
import Grid from 'aurora-frontend-react-komponenter/Grid'
import NavigationTile from 'aurora-frontend-react-komponenter/NavigationTile'
import { SingleColumnRow } from 'starter/components/Columns'
import Layout from 'starter/components/Layout'

const IndexPage = ({ data: { site } }) => (
  <Layout>
    <Grid>
      <SingleColumnRow>
        <h2>Velkommen til Skatteetatens github</h2>
      </SingleColumnRow>
      <SingleColumnRow>
        <NavigationTile contents={site.siteMetadata.repos} />
      </SingleColumnRow>
    </Grid>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        repos {
          title
          to
          icon
          description
        }
      }
    }
  }
`
