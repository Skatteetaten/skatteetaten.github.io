import { ReactNode } from 'react';
import { TopBanner } from '@skatteetaten/frontend-components/TopBanner';
import { FooterContent } from '@skatteetaten/frontend-components/FooterContent';
import { Grid } from '@skatteetaten/frontend-components/Grid';
import { LinkGroup } from '@skatteetaten/frontend-components/LinkGroup';

import './Layout.css';
import { LinkGroupProps } from '@skatteetaten/frontend-components/LinkGroup/LinkGroup.types';

interface LayoutProps {
  title: string | JSX.Element | undefined;
  children: ReactNode;
}

const links: LinkGroupProps['links'] = [
  {
    path: 'https://www.skatteetaten.no',
    text: 'Skatteetaten.no',
  },
  {
    path: 'https://github.com/Skatteetaten',
    text: 'Github Skatteetaten',
  },
  {
    path: 'https://uustatus.no/nb/erklaringer/publisert/e92f8e05-b13f-4fb8-a1bf-e9f5e6553c1d',
    text: 'Tilgjengelighetserklæring',
  },
];

export function Layout(props: LayoutProps) {
  return (
    <div className="layout">
      <TopBanner
        external={true}
        homeText="Til skatteetaten.no"
        homeUrl="https://www.skatteetaten.no"
        title={props.title}
      />
      <div className="layout-content">{props.children}</div>
      <FooterContent>
        <Grid>
          <Grid.Row>
            <Grid.Col lg={1} />
            <Grid.Col lg={2}>
              <FooterContent.Logo />
            </Grid.Col>
            <Grid.Col lg={6} className="footer-linkgroup">
              <h2>Skatteetaten</h2>
              <LinkGroup links={links} />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </FooterContent>
    </div>
  );
}
