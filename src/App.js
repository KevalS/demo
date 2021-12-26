import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import OrganizationSettings from './Components/OrgnizationSettings/OrgnizationSettings';
import OrganizationInfo from './Components/OrganizationInfo/OrganizationInfo';
import './App.css';

function App() {
  const { currentOrganization } = useSelector(
    (state) => state
  );
  const { background_image = '' } = currentOrganization;
  const backgroundStyles = {
    backgroundImage: `url(${background_image})`,
    height: '100%'
  }
  return (
    <div className="App" style={backgroundStyles}>
      <Router>
        <Switch>
          <Route path='/home' >
            < OrganizationInfo />
          </Route>
          <Route exact path='/settings'>
            <OrganizationSettings />
          </Route>
          <Redirect to={'/home'} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
