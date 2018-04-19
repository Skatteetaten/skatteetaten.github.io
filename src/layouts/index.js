import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SkeBasis from 'aurora-frontend-react-komponenter/beholdere/SkeBasis/SkeBasis'
import Toppbanner from 'aurora-frontend-react-komponenter/beholdere/Toppbanner/Toppbanner'
import Bunn from 'aurora-frontend-react-komponenter/beholdere/Bunn/Bunn'
import Grid from 'aurora-frontend-react-komponenter/beholdere/Grid/Grid'
import './index.css'
import 'prismjs/themes/prism.css'

const gridSpec = {
  sm: 10,
  smPush: 1,
  md: 10,
  mdPush: 1,
  lg: 8,
  lgPush: 2,
  xl: 6,
  xlPush: 3,
  xxl: 6,
  xxlPush: 3,
}

const Layout = ({ children, data }) => (
  <SkeBasis>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Toppbanner
      ekstern
      hjemTekst="Github"
      hjemURL="/"
      tittel={data.site.siteMetadata.title}
    />
    <Grid className="ske-main-layout">
      <Grid.Row>
        <Grid.Col {...gridSpec}>{children()}</Grid.Col>
      </Grid.Row>
    </Grid>
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
