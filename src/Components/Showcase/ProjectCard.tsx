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
        <Heading level={4} color={'brand'}>
          {props.name}
        </Heading>
      </CardHeader>
      <CardBody a11yTitle={'cardBody'}>
        <Text color={'dark-2'} alignSelf={'start'} style={{lineHeight: '1.70'}}>
          {props.description}
        </Text>
      </CardBody>
      <CardFooter
        pad={{horizontal: 'small'}}
        background={'light-2'}
        align={'center'}
        a11yTitle={'cardFooter'}
      >
        {props.language ? (
          <Text weight={'normal'} color={'dark-1'}>
            Language: {props.language}
          </Text>
        ) : (
          ''
        )}
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
