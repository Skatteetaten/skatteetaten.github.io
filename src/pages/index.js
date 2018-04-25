import React from 'react'
import PostLink from '../components/post-link'
import Grid from 'aurora-frontend-react-komponenter/beholdere/Grid/Grid'
import auroraApi from './auroraApi.svg'
import auroraApiRuntime from './auroraRun.svg'

const InfoSeparator = ({ gridSpec }) => (
  <Grid.Row>
    <Grid.Col {...gridSpec}>
      <hr />
    </Grid.Col>
  </Grid.Row>
)

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  const infoGrid = {
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

  const howGrid = {
    ...infoGrid,
    xl: 6,
    xlPush: 3,
    xxl: 6,
    xxlPush: 3,
  }

  return (
    <Grid className="info-grid">
      <Grid.Row className="info-row">
        <Grid.Col {...infoGrid}>
          <h1>What?</h1>
          <p>
            The Aurora Plattform is a
            <a href="https://en.wikipedia.org/wiki/Platform_as_a_service">
              PaaS
            </a>
            built
            <a href="https://www.openshift.com">OpenShift</a>
            upon. At the core of the plattform is the declerative config format
            [AuroraConfig](auroraConfig) that allows operators to write
            declerative composable configuration for apps and environments. The
            tools ao, AuroraKonsole and the AuroraJenkinsPipeline library
            communicate with the AuroraAPI to apply AuroraConfig to clusters.
            The plattform also observes the state of applications running in it
            and expose a aggregated status view for an application. This again
            is the basis of the Wallboard component.
          </p>
        </Grid.Col>
        <Grid.Col {...infoGrid}>
          <h1>Why?</h1>
          <p>
            At NTA we have the need for functionality that allows us to apply
            Kubernetes objects to many clusters and still honoring RBAC. We have
            many different affiliations working in our clusters and we want them
            to use it safely without having to care if other affiliations can
            modify their environments. - many clusters - access control, role
            based RBAC - composable - sane defaults - corporate standard -
            external provisioning - affiliation concept. A team owning multiple
            namespacees. Group Namespaces
          </p>
        </Grid.Col>
      </Grid.Row>
      <InfoSeparator gridSpec={howGrid} />
      <Grid.Row className="info-row">
        <Grid.Col {...howGrid}>
          <h1>How?</h1>
          <p>
            We started out using [OpenShift
            Templates](https://docs.openshift.org/latest/dev_guide/templates.html)
            in 2015. A go-template based template engine that takes a list of
            parameters and replaces it into objects before applying them to the
            cluster. For our needs this technology was and is severly lacking. -
            no support for conditional logic - no support for loops - no support
            for optionaly including and entire object We then created a bash
            wrapper around the templates that would generate objects for it and
            modify them afterwards. The config for this bash wrapper resided
            along side the application code. After som experience with this we
            found several issues with it - writing good bash is hard and testing
            tools are lacking - no client-server model, so we had to duplicate
            functionality in web dashboard - you had to commit and change code
            in repo to change config. That means triggereing new jenkins builds
            when not really needed. This lead to the design of the start of the
            AuroraAPI with the [boober](aurorapi/boober),
            [AuroraConfig](auroraConfig) and [ao](tools/ao) components.
          </p>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="info-row">
        <Grid.Col {...howGrid}>
          <img
            src={auroraApi}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Grid.Col>
      </Grid.Row>
      <InfoSeparator gridSpec={howGrid} />
      <Grid.Row className="info-row">
        <Grid.Col {...howGrid}>
          <h1>Runtime</h1>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="info-row">
        <Grid.Col {...infoGrid}>
          <img
            src={auroraApiRuntime}
            style={{ maxWidth: '100%', maxHeight: '600px' }}
          />
        </Grid.Col>
        <Grid.Col {...infoGrid}>
          <p>
            We started out using [OpenShift
            Templates](https://docs.openshift.org/latest/dev_guide/templates.html)
            in 2015. A go-template based template engine that takes a list of
            parameters and replaces it into objects before applying them to the
            cluster. For our needs this technology was and is severly lacking. -
            no support for conditional logic - no support for loops - no support
          </p>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
    }
  }
`
