import {Container, Grid, Typography} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(20),
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
    },
    bigHeading: {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.secondary.light,
    },
    subtitle: {
      color: theme.palette.secondary.dark,
    },
  })
);

export default function Homepage(): JSX.Element {
  const classes = useStyles();
  return (
    <Container maxWidth={'md'}>
      <Grid className={classes.paper} md>
        <Typography className={classes.bigHeading} variant={'h2'}>
          Welcome to Fiddl
        </Typography>
        <Typography className={classes.subtitle} variant={'subtitle1'}>
          This is where I spend time
        </Typography>
      </Grid>
    </Container>
  );
}
