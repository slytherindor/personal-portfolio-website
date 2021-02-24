import {Box, Text} from 'grommet';
import {Alert} from 'grommet-icons';
import React from 'react';

export interface IAlertProps {
  severity: string;
}
export function AlertBox(
  props: React.PropsWithChildren<IAlertProps>
): JSX.Element {
  return (
    <Box
      background={{color: 'status-error', dark: 'false'}}
      pad={'xsmall'}
      direction={'row'}
      align={'center'}
      gap={'small'}
      animation={'fadeIn'}
    >
      <Alert />
      <Text color={'white'}>{props.children}</Text>
    </Box>
  );
}
