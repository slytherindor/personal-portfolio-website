import {Button, Card, CardBody, CardFooter, CardHeader, Heading} from 'grommet';
import {Code, Favorite, Launch} from 'grommet-icons';
import React from 'react';

export interface IProjectCardProps {
  title: string;
  description: string;
  language: string;
}
export default function ProjectCard(props: IProjectCardProps): JSX.Element {
  return (
    <Card height="medium" width="medium" background={'light-1'}>
      <CardHeader pad="medium">
        <Heading level={4}>{props.title}</Heading>
      </CardHeader>
      <CardBody pad="medium">{props.description}</CardBody>
      <CardFooter pad={{horizontal: 'small'}} background="light-2">
        <Button icon={<Favorite color="plain" />} hoverIndicator>
          Demo
        </Button>
        <Button icon={<Code color="plain" />} hoverIndicator />
        <Button icon={<Launch color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
}
