import {gql, useQuery} from '@apollo/client';
import {Box, Grid, Heading, Text} from 'grommet';
import {RotateRight} from 'grommet-icons';
import React from 'react';
import ProjectCard, {IProjectCardProps} from './ProjectCard';

export const PROJECTS_QUERY = gql`
  query {
    repos {
      description
      name
      language
      repoUrl
    }
  }
`;

function createProjectCardGrid(projects: IProjectCardProps[]): JSX.Element[] {
  const MAX_GRID_ITEM = 3;

  const res = projects.map((project, index) => {
    return (
      <Grid key={index}>
        <ProjectCard {...project} />
      </Grid>
    );
  });
  const out = [];
  let keyCounter = 0;
  while (res.length) {
    out.push(<Grid key={keyCounter}>{res.splice(0, MAX_GRID_ITEM)}</Grid>);
    keyCounter += 1;
  }
  return out;
}
export function ProgressIndicator(): JSX.Element {
  return (
    <Box align="center" justify="center" animation={'rotateRight'}>
      <RotateRight />
    </Box>
  );
}

export function Alert(props: any): JSX.Element {
  return (
    <Box background={'green'}>
      <Text color={'red'}>{props.children}</Text>;
    </Box>
  );
}

export function ProjectShowcase(): JSX.Element {
  const {loading, error, data} = useQuery(PROJECTS_QUERY);
  if (loading) return <ProgressIndicator />;
  /*
   * error is an object type here with ApolloError, networkError, graphQLErrors keys
   * Display message based on keys in future
   * */
  if (error) return <Alert>This is text</Alert>;
  return (
    <div>
      <ProgressIndicator />
      <Heading level={2} color={'accent-1'}>
        Projects
      </Heading>
      <ProjectCard
        title={'Base Server'}
        description={'Template for creating more projects'}
        language={'Typescript'}
      />
    </div>
  );
}
