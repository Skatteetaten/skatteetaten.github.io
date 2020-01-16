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
        heading: 'Aurora Platform',
        to: '/aurora',
        icon: 'Cloud',
        description: 'The Aurora Platform',
      },
      {
        heading: 'Skatteetatens designsystem',
        to: '/frontend-components',
        icon: 'Edit',
        description: 'Komponenter med Skatteetatens visuelle profil.',
      },
      {
        heading: 'Datasamarbeid',
        to: '/datasamarbeid-api-dokumentasjon',
        icon: 'Copy',
        description: 'Grensesnitt for skatte- og inntektsopplysninger.',
      },
      {
        heading: 'Folkeregisteret',
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
