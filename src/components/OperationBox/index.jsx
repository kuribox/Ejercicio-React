import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './OperationBox.scss';
import 'rc-slider/assets/index.css';
import flexStyle from '../../style/flex.scss';
import { numberWithDot } from '../../Utils/ProcessNumber';

class OperationBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      preffix: props.preffix ? props.preffix : ''
    };

    this.execOperation = this.execOperation.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { value1, value2 } = this.props;

    if (prevProps.value1 !== value1 || prevProps.value2 !== value2) {
      this.execOperation();
    }
  }

  // Calcula la operacion con los 2 valores
  execOperation() {
    const { operation, value1, value2 } = this.props;
    let operatedValue = null;

    if (operation === '+') {
      operatedValue = value1 + value2;
    }
    if (operation === '-') {
      operatedValue = value1 - value2;
    }
    if (operation === '/') {
      operatedValue = (value1 / value2).toFixed(2);
    }
    if (operation === '*') {
      operatedValue = value1 * value2;
    }

    this.setState({
      value: operatedValue,
    });
  }

  render() {
    const { title } = this.props;
    const { value, preffix } = this.state;

    const MainContainerClassName = [
      style.OperationMainContainer,
      flexStyle.flex,
      flexStyle['layout-row'],
      flexStyle['layout-align-center'],
      flexStyle['layout-justify-content-center'],
    ].join(' ');

    const TitleContainerClassName = [
      style.TitleContainer,
      flexStyle['flex-1'],
      flexStyle['layout-row'],
    ].join(' ');

    return (
      <div className={MainContainerClassName}>
        <div className={TitleContainerClassName}>{title}</div>
        <div className={style.OperationContainer}>
          {preffix} {numberWithDot(value)}
        </div>
      </div>
    );
  }
}

OperationBox.propTypes = {
  title: PropTypes.string,
  operation: PropTypes.string,
  value1: PropTypes.number,
  value2: PropTypes.number,
  preffix: PropTypes.string,
};

export default OperationBox;
