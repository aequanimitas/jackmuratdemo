import 'milligram/dist/milligram.css';
require('../scss/main.scss');

import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return (<div>
      <div class="container">
        <header>Header</header>
      </div>
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
    </div>)
  }
}

render(
  <App />,
  document.getElementById('root')
)
