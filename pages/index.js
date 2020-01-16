import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@skatteetaten/frontend-components/Grid'
import NavigationTile from '@skatteetaten/frontend-components/NavigationTile'
import { SingleColumnRow } from 'starter/components/Columns'
import SkeBasis from '@skatteetaten/frontend-components/SkeBasis'

const IndexPage = ({ data: { site } }) => (
  <SkeBasis style={{ margin: '0 25%' }}>
    <Grid>
      <SingleColumnRow>
        <h2>Velkommen til Skatteetatens github</h2>
      </SingleColumnRow>
      <SingleColumnRow>
        <NavigationTile contents={site.siteMetadata.repos} />
      </SingleColumnRow>
    </Grid>
  </SkeBasis>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        repos {
          heading
          to
          icon
          description
        }
      }
    }
  }
`
