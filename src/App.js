import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Home from '../src/pages/Home/home'
import Login from '../src/pages/Login/login'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>    
  )   
}

export default App;