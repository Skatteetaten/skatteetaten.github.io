import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import SkeBasis from 'aurora-frontend-react-komponenter/beholdere/SkeBasis/SkeBasis'
import Bunn from 'aurora-frontend-react-komponenter/beholdere/Bunn/Bunn'
import Grid from 'aurora-frontend-react-komponenter/beholdere/Grid/Grid'
import './index.css'
import 'prismjs/themes/prism.css'

const Layout = ({ children, data }) => (
  <SkeBasis>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Gugi',
          rel: 'stylesheet',
        },
      ]}
    />
    <Header
      title={data.site.siteMetadata.title}
      style={{ marginBottom: '35px' }}
    />
    {children()}
    <Bunn showLogo="true">
      <Grid.Col sm={12} lg={9} xl={9}>
        Innhold i footer
      </Grid.Col>
    </Bunn>
  </SkeBasis>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
