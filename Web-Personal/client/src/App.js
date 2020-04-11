import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './config/routes';

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) =>(
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

// funcion que reenderiza el componente correspondiente.
function RouteWithSubRoutes (route){
  return (
    <Route
      path={route.paht}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props}/>}
      />
  )
};



export default App;
