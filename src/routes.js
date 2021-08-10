import React from 'react'

import { NavBar } from './components/NavBar'
import { Home } from './views/Home'
import { Results } from './views/Results'
import { BusinessDetails } from './views/BusinessDetails'

import { Route, Switch, Redirect } from 'react-router-dom'

export const Routes = () => {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home">
          <Redirect to="/" />
        </Route>
        <Route exact path="/Results" component={Results} />
        <Route exact path="/BusinessDetails" component={BusinessDetails} />
      </Switch>
    </div>
  )
}
