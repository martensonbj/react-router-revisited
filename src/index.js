import React from 'react';
import { render } from 'react-dom'

import App from './App/App';
import About from './About/About';
import Contact from './Contact';
import Navigation from './Navigation'
import NoMatch from './NoMatch';
import Destination from './Destination'

import './index.css';

import { BrowserRouter, Match, Miss } from 'react-router'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/about" component={About} />
        <Match pattern="/about/:destination" component={Destination} />
        <Match exactly pattern="/contact" component={Contact} />
        <Miss component={NoMatch} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))
