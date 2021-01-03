import {Box} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import {GeneralConstants} from '../../LocaleConstants/en/GeneralConstants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: theme.palette.secondary.main,
    },
    appBar: {
      boxShadow: 'none',
    },
  })
);

export default function ButtonAppBar(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box borderBottom={1}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant={'h4'}>
              {GeneralConstants.APP_NAME}
            </Typography>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="github"
              href={'https://github.com/slytherindor'}
              target={'_blank'}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="linkedin"
              href={'https://linkedin.com/in/shubhaarsay'}
              target={'_blank'}
            >
              <LinkedInIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
