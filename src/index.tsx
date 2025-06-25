import { createRoot } from 'react-dom/client';
import { SkeBasis } from '@skatteetaten/frontend-components/SkeBasis';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { NavigationTile } from '@skatteetaten/frontend-components/NavigationTile';
import { Layout } from './components/Layout';
import { SingleColumnRow } from './components/Columns';
import './index.css';

const repos = [
  {
    heading: 'Skatteetatens API-er',
    to: '/api-dokumentasjon',
    icon: 'Copy',
    description: 'Dokumentasjon av API-er fra Skatteetaten',
  },
  {
    heading: 'Folkeregisteret API-er',
    to: '/folkeregisteret-api-dokumentasjon',
    icon: 'Folkeregister',
    description: 'Dokumentasjon av API-er for Folkeregisteret',
  },
  {
    heading: 'Skattemelding',
    to: 'https://github.com/Skatteetaten/skattemeldingen',
    icon: 'Skattetrekk',
    description: 'Kode og spesifikasjoner for skattemeldingen',
  },
  {
    heading: 'Trekktabell',
    to: 'https://github.com/Skatteetaten/trekktabell',
    icon: 'Skattetrekk',
    description: 'Dokumentasjon av trekkrutine for beregning av forskuddstrekk',
  },
  {
    heading: 'Beta API-er',
    to: '/beta-apier',
    icon: 'Copy',
    description:
      'Dokumentasjon av API-er fra Skatteetaten som er under utvikling',
  },
  {
    heading: 'SAF-T',
    to: 'https://github.com/Skatteetaten/saf-t',
    icon: 'Skattetrekk',
    description: 'Dokumentasjon av norske SAF-T skjema, eksempelfiler osv.',
  },
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
];

const root = createRoot(document.getElementById('root')!);

root.render(
  <SkeBasis>
    <Layout title="Skatteetaten.github.io">
      <Grid>
        <SingleColumnRow>
          <h2>Velkommen til Skatteetatens github</h2>
        </SingleColumnRow>
        <SingleColumnRow>
          <NavigationTile contents={repos} />
        </SingleColumnRow>
      </Grid>
    </Layout>
  </SkeBasis>
);
