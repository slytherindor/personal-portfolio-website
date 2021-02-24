import {ApolloProvider} from '@apollo/client';
import {grommet, Grommet, Main} from 'grommet';
import React from 'react';
import Introduction from './Components/Homepage/Introduction';
import Navbar from './Components/Layouts/Navbar';
import {ProjectShowcase} from './Components/Showcase/ProjectShowcase';
import {client} from './graphql/client';

export default function App(): JSX.Element {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <Grommet full theme={grommet} themeMode={darkMode ? 'dark' : 'light'}>
      <ApolloProvider client={client}>
        <Navbar darkModeToggle={setDarkMode} darkMode={darkMode} />
        <Main
          pad="large"
          align={'center'}
          fill={'horizontal'}
          responsive={true}
        >
          <Introduction />
          <ProjectShowcase />
        </Main>
      </ApolloProvider>
    </Grommet>
  );
}
