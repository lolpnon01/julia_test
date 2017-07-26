import {AppContainer} from 'react-hot-loader'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom/es'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import './app.scss'

// States
import Index from './states/index/IndexState'

const render = () => {
  return ReactDOM.render(
    <AppContainer>
      <Router>
        <div className="app-wrapper">
          <Route path="/" component={Index}/>
        </div>
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
};
render();

if(module.hot) {
  module.hot.accept();
}
