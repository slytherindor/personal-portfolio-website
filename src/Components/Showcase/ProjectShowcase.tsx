import {gql, useQuery} from '@apollo/client';
import {CircularProgress, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import * as React from 'react';
import ProjectCard, {ProjectInterface} from './ProjectCard';

const PROJECTS = gql`
  query {
    repos {
      description
      name
      language
      repoUrl
    }
  }
`;

function createProjectCardGrid(projects: ProjectInterface[]): JSX.Element[] {
  const MAX_GRID_ITEM = 3;

  const res = projects.map((project, index) => {
    return (
      <Grid item xs={12} md={4} key={index}>
        <ProjectCard {...project} />
      </Grid>
    );
  });
  const out = [];
  let keyCounter = 0;
  while (res.length) {
    out.push(
      <Grid container item xs={12} spacing={3} key={keyCounter}>
        {res.splice(0, MAX_GRID_ITEM)}
      </Grid>
    );
    keyCounter += 1;
  }
  return out;
}

export default function ProjectShowcase(): JSX.Element {
  const {loading, error, data} = useQuery(PROJECTS);
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Failed to fetch projects</Alert>;
  console.log(data.repos);
  return (
    <div>
      <Typography gutterBottom color={'secondary'} variant="h3" component="h4">
        Projects
      </Typography>
      <Grid container spacing={1}>
        <React.Fragment>{createProjectCardGrid(data.repos)}</React.Fragment>
      </Grid>
    </div>
  );
}
