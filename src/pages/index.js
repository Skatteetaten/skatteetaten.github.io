import React from 'react'
import PostLink from '../components/post-link'
import Quote from '../components/Quote'
import Grid from 'aurora-frontend-react-komponenter/beholdere/Grid/Grid'
import auroraApi from '../assets/images/auroraApi.svg'
import auroraApiRuntime from '../assets/images/auroraRun.svg'

const InfoSeparator = ({ gridSpec }) => (
  <Grid.Row>
    <Grid.Col {...gridSpec}>
      <hr />
    </Grid.Col>
  </Grid.Row>
)

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

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const FrontendContent = ({ path }) => {
    const content = edges.find(edge => {
      return edge.node.fields.slug === path
    })
    return (
      content && <div dangerouslySetInnerHTML={{ __html: content.node.html }} />
    )
  }

  return (
    <Grid className="info-grid">
      <Grid.Row>
        <Grid.Col {...doubleColGrid}>
          <h1>What?</h1>
          <FrontendContent path="/frontpage/what/" />
        </Grid.Col>
        <Grid.Col {...doubleColGrid}>
          <h1>Why?</h1>
          <FrontendContent path="/frontpage/why/" />
        </Grid.Col>
      </Grid.Row>
      <Quote source="Bjarte" style={{ margin: '20px 0' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna
        lorem, aliquam a faucibus id, tempor vitae est. Ut at leo id ex
        ultricies fermentum.
      </Quote>
      <Grid.Row>
        <Grid.Col {...singleColGrid}>
          <h1>How?</h1>
          <FrontendContent path="/frontpage/how/" />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col {...singleColGrid}>
          <img
            src={auroraApi}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Grid.Col>
      </Grid.Row>
      <InfoSeparator gridSpec={singleColGrid} />
      <Grid.Row>
        <Grid.Col {...singleColGrid}>
          <h1>Runtime</h1>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col {...doubleColGrid}>
          <img
            src={auroraApiRuntime}
            style={{ maxWidth: '100%', maxHeight: '600px' }}
          />
        </Grid.Col>
        <Grid.Col {...doubleColGrid}>
          <FrontendContent path="/frontpage/runtime/" />
        </Grid.Col>
      </Grid.Row>
    </Grid>
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
