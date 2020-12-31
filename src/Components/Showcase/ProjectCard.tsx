import {
  Button,
  Card,
  CardActions,
  createStyles,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import * as React from 'react';

export interface ProjectInterface {
  title: string;
  description: string;
  codeUrl: string;
}
const useStyles = makeStyles(theme =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      color: theme.palette.primary.contrastText,
    },
  })
);

export default function ProjectCard(props: ProjectInterface): JSX.Element {
  const classes = useStyles();
  return (
    <Card variant={'outlined'}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          Explore
        </Button>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <CodeIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
