import {gql, useQuery} from '@apollo/client';
import {Box, Grid, Heading} from 'grommet';
import React from 'react';
import {AlertBox} from '../Utils/AlertBox';
import {ProgressIndicator} from '../Utils/ProgressIndicator';
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
      <Box gap={'medium'} key={index} responsive={true}>
        <ProjectCard {...project} />
      </Box>
    );
  });
  const out = [];
  let keyCounter = 0;
  while (res.length) {
    out.push(
      <Grid
        columns={'medium'}
        gap={'medium'}
        key={keyCounter}
        responsive={true}
        fill={'horizontal'}
        align={'center'}
      >
        {res.splice(0, MAX_GRID_ITEM)}
      </Grid>
    );
    keyCounter += 1;
  }
  return out;
}

export function ProjectShowcase(): JSX.Element {
  const {loading, error, data} = useQuery(PROJECTS_QUERY);
  if (loading) return <ProgressIndicator />;
  /*
   * error is an object type here with ApolloError, networkError, graphQLErrors keys
   * Display message based on keys in future
   * */
  if (error)
    return <AlertBox severity={'error'}>Failed to fetch projects</AlertBox>;
  return (
    <Box flex={'grow'} fill={'horizontal'}>
      <Heading level={2} color={'dark-1'}>
        Projects
      </Heading>
      <Box>{createProjectCardGrid(data.repos)}</Box>
    </Box>
  );
}
