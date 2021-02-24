import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from 'grommet';
import {Code, Launch} from 'grommet-icons';
import React from 'react';

export interface IProjectCardProps {
  name: string;
  description: string;
  language: string;
  repoUrl: string;
}
export default function ProjectCard(props: IProjectCardProps): JSX.Element {
  return (
    <Card height="medium" width="medium" pad={'small'} background={'light-1'}>
      <CardHeader pad="small" a11yTitle={'cardHeader'}>
        <Heading level={4}>{props.name}</Heading>
      </CardHeader>
      <CardBody a11yTitle={'cardBody'}>
        <Text>{props.description}</Text>
      </CardBody>
      <CardFooter
        pad={{horizontal: 'small'}}
        background={'light-2'}
        align={'center'}
        a11yTitle={'cardFooter'}
      >
        <Text weight={'normal'}>Language: {props.language}</Text>
        <Button
          a11yTitle={'repoUrlButton'}
          href={props.repoUrl}
          target={'_blank'}
          icon={<Code color="plain" />}
          hoverIndicator
        />
        <Button icon={<Launch color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
}
