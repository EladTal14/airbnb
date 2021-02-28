import React from 'react';
import { AppHeader } from './cmps/AppHeader';
import { Switch, Route } from 'react-router-dom'
import './styles/styles.scss'
import { routes } from './routes'


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        {routes && routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>


    </div>
  );
}

export default App;
