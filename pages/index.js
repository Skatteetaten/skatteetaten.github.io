import React from 'react'
import Grid from 'aurora-frontend-react-komponenter/Grid'
import NavigationTile from 'aurora-frontend-react-komponenter/NavigationTile'
import { SingleColumnRow } from '../gatsby-starter-skatteetaten/src/components/Columns'

const IndexPage = ({ data: { site } }) => (
  <Grid>
    <SingleColumnRow>
      <p style={{ fontSize: '18px' }}>
        Welcome to Skatteetaten (The Norwegian Tax Administration) on GitHub.
      </p>
      <h2>Open source projects by Skatteetaten</h2>
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
