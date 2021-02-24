import {Box} from 'grommet';
import {RotateRight} from 'grommet-icons';
import React from 'react';

export function ProgressIndicator(): JSX.Element {
  return (
    <Box
      align="center"
      justify="center"
      animation={'rotateRight'}
      a11yTitle={'progressIndicator'}
    >
      <RotateRight />
    </Box>
  );
}
