import React from 'react'
import PostLink from '../components/post-link'
import Quote from '../components/Quote'
import Grid from 'aurora-frontend-react-komponenter/beholdere/Grid/Grid'
import auroraApi from '../assets/images/aurora-api.svg'
import auroraObserve from '../assets/images/aurora-run.svg'
import auroraBuild from '../assets/images/aurora-build.svg'

const doubleColGrid = {
  sm: 10,
  smPush: 1,
  md: 10,
  mdPush: 1,
  lg: 10,
  lgPush: 1,
  xl: 3,
  xlPush: 3,
  xxl: 3,
  xxlPush: 3,
}

const singleColGrid = {
  ...doubleColGrid,
  xl: 6,
  xlPush: 3,
  xxl: 6,
  xxlPush: 3,
}

const InfoSeparator = () => (
  <Grid.Row>
    <Grid.Col {...singleColGrid}>
      <hr style={{ margin: '30px 0' }} />
    </Grid.Col>
  </Grid.Row>
)

const InfoRow = ({ title, picture, children, left }) => {
  const Picture = () => (
    <Grid.Col {...doubleColGrid}>
      <img src={picture} style={{ maxWidth: '100%', maxHeight: '600px' }} />
    </Grid.Col>
  )

  return (
    <div>
      <Grid.Row>
        {left && <Picture />}
        <Grid.Col {...doubleColGrid}>
          {title && <h2>{title}</h2>}
          {children}
        </Grid.Col>
        {!left && <Picture />}
      </Grid.Row>
    </div>
  )
}

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const FrontendContent = ({ path }) => {
    const content = edges.find(edge => {
      return edge.node.fields.slug === path
    })
    return (
      content && <div dangerouslySetInnerHTML={{ __html: content.node.html }} />
    )
  }

  const WhatAndWhyRow = () => (
    <Grid.Row>
      <Grid.Col {...doubleColGrid}>
        <FrontendContent path="/frontpage/faster-development/" />
      </Grid.Col>
      <Grid.Col {...doubleColGrid}>
        <FrontendContent path="/frontpage/why/" />
      </Grid.Col>
    </Grid.Row>
  )

  return (
    <div>
      <Grid className="info-grid">
        <WhatAndWhyRow />
      </Grid>

      <Quote
        source="Bjarte Karlsen, Technical Architect NTA"
        style={{ margin: '30px 0' }}
      >
        In order to avoid 'wall-of-yaml' we use a declarative, composable
        configuration format with sane defaults.
      </Quote>

      <Grid className="info-grid">
        <InfoRow picture={auroraApi}>
          <FrontendContent path="/frontpage/deploy/" />
        </InfoRow>

        <InfoSeparator />

        <InfoRow picture={auroraBuild} left>
          <FrontendContent path="/frontpage/build/" />
        </InfoRow>

        <InfoSeparator />

        <InfoRow picture={auroraObserve}>
          <FrontendContent path="/frontpage/observe/" />
        </InfoRow>
      </Grid>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          fields {
            slug
          }
        }
      }
    }
  }
`
