import React from 'react';
import { render } from 'react-dom'

import App from './App';
import './index.css';

import { BrowserRouter, Match, Miss } from 'react-router'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))
