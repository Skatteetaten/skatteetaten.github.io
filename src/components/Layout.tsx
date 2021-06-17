import React, { FC } from 'react';
import {
  TopBanner,
  FooterContent,
  Grid,
} from '@skatteetaten/frontend-components';

import './Layout.css';

interface LayoutProps {
  title: string | JSX.Element | undefined;
}

export const Layout: FC<LayoutProps> = ({ title, children }) => (
  <div className="layout">
    <TopBanner
      external
      homeText="Til skatteetaten.no"
      homeUrl="https://www.skatteetaten.no"
      title={title}
    />
    <div className="layout-content">{children}</div>
    <FooterContent>
      <Grid>
        <Grid.Row>
          <Grid.Col sm={12} lg={12} xl={2}>
            <FooterContent.Logo />
          </Grid.Col>
          <Grid.Col sm={12} lg={12} xl={4}>
            <a
              href="https://github.com/Skatteetaten"
              target="blank"
              style={{ margin: '10px 0', color: 'white' }}
            >
              github.com/skatteetaten
            </a>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </FooterContent>
  </div>
);
