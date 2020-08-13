
/*
* All routes imported here in app component.
*/

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

const App = () => (
  <div>
    <Router>
      <Routes />
    </Router>
  </div>
);

export default App;
