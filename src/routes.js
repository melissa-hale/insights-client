import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Home } from './views/Home'
import { Results } from './views/Results'
import { BusinessDetails } from './views/BusinessDetails'
import NewBusiness from './views/NewBusiness/NewBusiness'


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
		{/* How to make BusinessDetails only reachable from Results */}
        <Route exact path="/BusinessDetails" component={BusinessDetails} />
        <Route exact path="/NewBusiness" component={NewBusiness} />
      </Switch>
    </div>
  )
}
