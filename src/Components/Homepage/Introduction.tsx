import {Box, Heading, Paragraph} from 'grommet';
import React from 'react';
import {GeneralConstants} from '../../LocaleConstants/en/GeneralConstants';

export default function Introduction(): JSX.Element {
  return (
    <Box>
      <Heading color={'accent-1'}>Hey there!</Heading>
      <Paragraph responsive={true} size={'medium'}>
        {GeneralConstants.INTRO_PART_1}
      </Paragraph>
      <Paragraph responsive={true} size={'medium'}>
        {GeneralConstants.INTRO_PART_2}
      </Paragraph>
    </Box>
  );
}
