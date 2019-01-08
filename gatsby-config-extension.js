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
        description: 'The Aurora Platform',
      },
      {
        title: 'Datasamarbeid',
        to: '/datasamarbeid-api-dokumentasjon',
        icon: 'Copy',
        description: 'Grensesnitt for skatte- og inntektsopplysninger.',
      },
      {
        title: 'Folkeregisteret',
        to: '/folkeregisteret-api-dokumentasjon',
        icon: 'Skattetrekk',
        description:
          'Modernisering av folkeregisteret er i pilot. Her er grensesnittene (API) dokumentert.',
      },
    ],
  }
  config.pathPrefix = '/'
  return config
}
