/*
 * @Author: hhhhhq
 * @Date: 2020-04-11 21:43:44
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-15 19:42:01
 * @Description: file content
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App';
import GamesPage from './components/GamesPage'
import GameForm from './components/GameForm'

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
)

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div className="ui container">
        <div className="ui three item menu">
          <NavLink activeClassName="active" className="item" exact to="/">Home</NavLink>
          <NavLink activeClassName="active" className="item" exact to="/games">Games</NavLink>
          <NavLink activeClassName="active" className="item" exact to="/games/new">Add Game</NavLink>
        </div>
        <Route exact path="/" component={ App }/>
        <Route exact path="/games" component={ GamesPage }/>
        <Route path="/games/new" component={ GameForm }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);