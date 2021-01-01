import {createMuiTheme, CssBaseline, MuiThemeProvider} from '@material-ui/core';
import * as React from 'react';
import Homepage from './Components/Homepage/Homepage';
import ButtonAppBar from './Components/Layouts/Header';
import ProjectShowcase from './Components/Showcase/ProjectShowcase';
import palette from './Themes/default_palette.json';
export const theme = createMuiTheme(palette);
function App(): JSX.Element {
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
