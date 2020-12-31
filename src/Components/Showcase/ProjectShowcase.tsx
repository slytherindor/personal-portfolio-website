import {Container, Grid} from '@material-ui/core';
import * as React from 'react';
import ProjectCard, {ProjectInterface} from './ProjectCard';

const projects: ProjectInterface[] = [
  {
    title: 'Project Title',
    description: 'This is a long description of the project',
    codeUrl: 'URL',
  },
  {
    title: 'Project Title',
    description: 'This is a long description of the project',
    codeUrl: 'URL',
  },
  {
    title: 'Project Title',
    description: 'This is a long description of the project',
    codeUrl: 'URL',
  },
  {
    title: 'Project Title',
    description: 'This is a long description of the project',
    codeUrl: 'URL',
  },
  {
    title: 'Project Title',
    description: 'This is a long description of the project',
    codeUrl: 'URL',
  },
  {
    title: 'Project Title',
    description: 'This is a long description of the project',
    codeUrl: 'URL',
  },
  {
    title: 'Project Title',
    description: 'This is a long description of the project',
    codeUrl: 'URL',
  },
];

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
        {res.splice(0, MAX_GRID_ITEM)};
      </Grid>
    );
    keyCounter += 1;
  }
  return out;
}
export default function ProjectShowcase(): JSX.Element {
  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={1}>
        <React.Fragment>{createProjectCardGrid(projects)}</React.Fragment>
      </Grid>
    </Container>
  );
}
