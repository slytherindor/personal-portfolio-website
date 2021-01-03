import {gql, useQuery} from '@apollo/client';
import {CircularProgress, createStyles, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import * as React from 'react';
import ProjectCard, {ProjectInterface} from './ProjectCard';

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

const useStyles = makeStyles(theme =>
  createStyles({
    heading: {
      color: theme.palette.primary.contrastText,
    },
  })
);

export default function ProjectShowcase(): JSX.Element {
  const classes = useStyles();
  const {loading, error, data} = useQuery(PROJECTS_QUERY);
  if (loading) return <CircularProgress />;
  /*
   * error is an object type here with ApolloError, networkError, graphQLErrors keys
   * Display message based on keys in future
   * */
  if (error) return <Alert severity="error">Failed to fetch projects</Alert>;
  return (
    <div>
      <Typography
        gutterBottom
        className={classes.heading}
        variant="h3"
        component="h4"
      >
        Projects
      </Typography>
      <Grid container spacing={1}>
        <React.Fragment>{createProjectCardGrid(data.repos)}</React.Fragment>
      </Grid>
    </div>
  );
}
