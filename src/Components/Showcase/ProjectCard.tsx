import {Button, Card, CardActions} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

export interface ProjectInterface {
  name: string;
  description: string;
  repoUrl: string;
  language: string;
}

export default function ProjectCard(props: ProjectInterface): JSX.Element {
  return (
    <Card variant={'outlined'}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography
          gutterBottom
          role={'paragraph'}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {props.description}
        </Typography>
        <Typography
          role={'paragraph'}
          variant="subtitle1"
          color="textSecondary"
          component="p"
        >
          Language: {props.language}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          Demo
        </Button>
        <Button
          size="small"
          color="secondary"
          href={props.repoUrl}
          target={'_blank'}
        >
          Code
        </Button>
      </CardActions>
    </Card>
  );
}
