import React, { Component } from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RecoilRoot>
        <Hello />
      </RecoilRoot>
    );
  }
}

render(<App />, document.getElementById('root'));
