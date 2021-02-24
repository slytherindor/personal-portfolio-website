import {Anchor, Box, Header, Text} from 'grommet';
import {Github, Linkedin, Moon} from 'grommet-icons';
import * as React from 'react';
import {GeneralConstants} from '../../LocaleConstants/en/GeneralConstants';

export interface INavbarProps {
  darkModeToggle?: Function;
  darkMode?: boolean;
}

export default function Navbar(props: INavbarProps): JSX.Element {
  return (
    <Header
      tag={'header'}
      direction={'row'}
      align={'center'}
      justify={'between'} // spreads out the content of the box
      background={'brand'}
      as={'nav'}
      height={'xsmall'}
      gap={'medium'}
      pad={'large'}
    >
      <Text color={'accent-1'} weight={'bold'}>
        {GeneralConstants.APP_NAME}
      </Text>
      <Box direction={'row'} gap={'medium'}>
        <Anchor
          href={GeneralConstants.GITHUB_URL}
          target={'_blank'}
          alignSelf={'end'}
          a11yTitle="github"
          icon={<Github />}
        />
        <Anchor
          href={GeneralConstants.LINKEDIN_URL}
          target={'_blank'}
          alignSelf={'end'}
          a11yTitle="linkedin"
          icon={<Linkedin />}
        />
        <Anchor
          reverse={true}
          alignSelf={'end'}
          onClick={() => {
            props.darkModeToggle ? props.darkModeToggle(!props.darkMode) : null;
          }}
          icon={<Moon color={props.darkMode ? 'white' : 'accent-1'} />}
        />
      </Box>
    </Header>
  );
}
