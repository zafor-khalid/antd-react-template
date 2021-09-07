import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from './containers'

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById('root')
)
