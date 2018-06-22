module.exports = function(config) {
  config.siteMetadata = {
    title: 'Skatteetaten.github.io',
    menu: [
      {
        href: '/',
        name: 'Skatteetaten.github.io',
      },
    ],
    repos: [
      {
        title: 'Aurora Platform',
        to: '/aurora',
        icon: 'Cloud',
        description: 'The Aurora OpenShift Platform',
      },
      {
        title: 'Datasamarbeid',
        to: '/datasamarbeid-api-dokumentasjon',
        icon: 'Copy',
        description: 'API-dokumentasjon for Datasamarbeid',
      },
      {
        title: 'Folkeregisteret',
        to: '/folkeregisteret-api-dokumentasjon',
        icon: 'Skattetrekk',
        description: 'API-dokumentasjon for FREG',
      },
    ],
  }
  config.pathPrefix = '/'
  return config
}
