import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Routes  } from 'react-router-dom';
import { urlRoutesConstants } from "./utility/constants/urlRoutesConstants";
import rawfile from "./pages/rawfile"
import newfile from "./pages/newfile"
// import landingpage from "./pages/newfile"
import 'devextreme/dist/css/dx.light.css';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    // <Container maxWidth="sm">
    //   <Box sx={{ my: 4 }}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Create React App v5 example
    //     </Typography>
    //     <ProTip />
    //     <Copyright />

    //   </Box>
    // </Container>
    <Router>
    <Switch>

    <Route
      exactl
      path={urlRoutesConstants.rawfile}
      component={rawfile}
    />
     <Route
      exactl
      path={urlRoutesConstants.newfile}
      component={newfile}
    />
      
    </Switch>
  </Router>
  );
}
