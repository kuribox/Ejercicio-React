import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Layout from './components/Layout';
import Slider from './components/Slider';
import OperationBox from './components/OperationBox';
import Bottom from './components/Bottom';

import './style/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashValue: 0,
      placeValue: 0,
    };
  }

  render() {
    const { cashValue, placeValue } = this.state;

    return (
      <Layout title="Simulá tu crédito">
        <Slider
          onChange={value => {
            this.setState({
              cashValue: value,
            });
          }}
          title="Monto Total"
          preffix="$"
          step={1}
          min={5000}
          max={50000}
        />
        <Slider
          onChange={value => {
            this.setState({
              placeValue: value,
            });
          }}
          title="Plazo"
          step={1}
          min={3}
          max={24}
        />
        <OperationBox
          title="Cuota fija por mes"
          operation="/"
          preffix="$"
          value1={cashValue}
          value2={placeValue}
        />
        <Bottom />
      </Layout>
    );
  }
}

export default hot(module)(App);
