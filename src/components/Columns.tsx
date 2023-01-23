import React, { ReactNode } from 'react';
import Grid from '@skatteetaten/frontend-components/Grid';

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
};

const singleColGrid = {
  ...doubleColGrid,
  xl: 6,
  xlPush: 3,
  xxl: 6,
  xxlPush: 3,
};

type Props = {
  children: ReactNode;
};

export function SingleColumnRow(props: Props) {
  return (
    <Grid.Row>
      <Grid.Col {...singleColGrid}>{props.children}</Grid.Col>
    </Grid.Row>
  );
}

export function DoubleColumnRow(props: Props) {
  return (
    <Grid.Row>
      {React.Children.map(props.children, (child) => {
        if (!child) {
          return false;
        }
        return <Grid.Col {...doubleColGrid}>{child}</Grid.Col>;
      })}
    </Grid.Row>
  );
}
