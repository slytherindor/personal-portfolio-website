import {Container, Grid, Typography} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import * as React from 'react';
import {GeneralConstants} from '../../LocaleConstants/en/GeneralConstants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(10),
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(5),
    },
    bigHeading: {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.secondary.dark,
    },
    subtitle: {
      textAlign: 'left',
      color: theme.palette.secondary.dark,
    },
  })
);

export default function Homepage(): JSX.Element {
  const classes = useStyles();
  return (
    <Container maxWidth={'md'}>
      <Grid className={classes.paper}>
        <Typography
          data-testid={'heading'}
          gutterBottom={true}
          className={classes.bigHeading}
          variant={'h2'}
        >
          Hey there!
        </Typography>
        <Typography
          data-testid={'intro-1'}
          gutterBottom={true}
          className={classes.subtitle}
          variant={'subtitle1'}
        >
          {GeneralConstants.INTRO_PART_1}
        </Typography>
        <Typography
          data-testid={'intro-2'}
          className={classes.subtitle}
          variant={'subtitle1'}
        >
          {GeneralConstants.INTRO_PART_2}
        </Typography>
      </Grid>
    </Container>
  );
}
