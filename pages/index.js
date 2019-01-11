import React from 'react'
import { graphql } from 'gatsby'
import Grid from 'aurora-frontend-react-komponenter/Grid'
import NavigationTile from 'aurora-frontend-react-komponenter/NavigationTile'
import { SingleColumnRow } from 'starter/components/Columns'

const IndexPage = ({ data: { site } }) => (
  <Grid>
    <SingleColumnRow>
      <h2>Velkommen til Skatteetatens github</h2>
    </SingleColumnRow>
    <SingleColumnRow>
      <NavigationTile contents={site.siteMetadata.repos} />
    </SingleColumnRow>
  </Grid>
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
