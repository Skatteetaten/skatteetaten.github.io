import React from 'react';
import ReactDOM from 'react-dom';
import {
  SkeBasis,
  Grid,
  NavigationTile,
} from '@skatteetaten/frontend-components';
import { Layout } from './components/Layout';
import { SingleColumnRow } from './components/Columns';
import './index.css';

const repos = [
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
    heading: 'Skatteetatens delingstjenester',
    to: '/datasamarbeid-api-dokumentasjon',
    icon: 'Copy',
    description: 'Grensesnitt for delingstjenester fra Skatteetaten.',
  },
  {
    heading: 'Folkeregisteret',
    to: '/folkeregisteret-api-dokumentasjon',
    icon: 'Skattetrekk',
    description:
      'Grensesnitt for Skatteetatens delingstjenester for Folkeregisteret.',
  },
];

ReactDOM.render(
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
  </SkeBasis>,
  document.getElementById('root')
);
