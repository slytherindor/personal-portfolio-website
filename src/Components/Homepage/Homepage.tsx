import {Container, Grid, Typography} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(15),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
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
      <Grid className={classes.paper}>
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
