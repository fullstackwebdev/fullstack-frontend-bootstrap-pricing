import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Base from './components/Base.js';
import BaseNavBar from './components/BaseNavBar.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BaseNavBar />
          <Route exact path="/" component={Base} />

        </div>
      </Router>
    );
  }
}

export default App;
