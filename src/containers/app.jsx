import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ROUTENAME } from '../constants'
import { HomePage } from '../pages'

const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTENAME.HOME} component={HomePage} />
    </Switch>
  )
}

export default App
