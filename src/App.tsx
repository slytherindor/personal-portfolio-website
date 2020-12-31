import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import Homepage from './Components/Homepage/Homepage';
import ButtonAppBar from './Components/Layouts/Header';
import ProjectShowcase from './Components/Showcase/ProjectShowcase';
import palette from './Themes/default_palette.json';

function App(): JSX.Element {
  const theme = createMuiTheme(palette);
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <ButtonAppBar />
        <Homepage />
        <ProjectShowcase />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
export default App;
