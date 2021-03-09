import React from 'react'
import { AppHeader } from './cmps/AppHeader'
import { Switch, Route } from 'react-router-dom'
import './styles/styles.scss'
import { routes } from './routes'
import { AppFooter } from './cmps/AppFooter'


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        {routes && routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App
