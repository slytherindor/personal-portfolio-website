import {ApolloProvider} from '@apollo/client';
import {Grommet, Main} from 'grommet';
import React from 'react';
import Introduction from './Components/Homepage/Introduction';
import Navbar from './Components/Layouts/Navbar';
import {ProjectShowcase} from './Components/Showcase/ProjectShowcase';
import {client} from './graphql/client';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Grommet plain>
        <ApolloProvider client={client}>
          <Navbar />
          <Main pad="large" align={'center'} fill={'vertical'}>
            <Introduction />
            <ProjectShowcase />
          </Main>
        </ApolloProvider>
      </Grommet>
    </React.Fragment>
  );
}
