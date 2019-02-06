import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import PropTypes from 'prop-types';
import style from './Slider.scss';
import 'rc-slider/assets/index.css';
import flexStyle from '../../style/flex.scss';
import { numberWithDot } from '../../Utils/ProcessNumber';

class Slider extends Component {
  // Handle para mostrar tooltip al mover el slider
  static handle(props) {
    const { value, dragging, index, ...restProps } = props;

    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <RCSlider.Handle value={value} {...restProps} />
      </Tooltip>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.min,
      preffix: props.preffix ? props.preffix : '',
    };

    // Asignacion del valor minimo como default
    if (props.onChange) {
      props.onChange(props.min);
    }

    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  // Handle cuando cambia el slider
  handleChange(value) {
    const { onChange } = this.props;
    this.setState({
      value,
    });

    // Funcion de callback
    if (onChange) {
      onChange(value);
    }
  }

  getValue() {
    const { value } = this.state;
    return value;
  }

  render() {
    const { title, min, max, step } = this.props;
    const { value, preffix } = this.state;

    const MainContainerClassName = [
      style.SliderMainContainer,
      flexStyle.flex,
      flexStyle['layout-column'],
    ].join(' ');

    const SliderContainerClassName = [
      style.SliderContainer,
      flexStyle.flex,
    ].join(' ');

    const FirstLineContainer = [
      style.FirstLineContainer,
      flexStyle.flex,
      flexStyle['layout-row'],
      flexStyle['layout-align-center'],
      flexStyle['layout-justify-content-center'],
    ].join(' ');

    const ThirdLineContainer = [
      style.ThirdLineContainer,
      flexStyle.flex,
      flexStyle['layout-row'],
      flexStyle['layout-align-center'],
      flexStyle['layout-justify-content-center'],
    ].join(' ');

    return (
      <div className={MainContainerClassName}>
        <div className={FirstLineContainer}>
          <div className={style.TitleContainer}>{title}</div>
          <div className={flexStyle['flex-1']} />
          <input
            className={style.SliderInput}
            disabled
            type="text"
            value={`${preffix} ${numberWithDot(value)}`}
          />
        </div>
        <div className={SliderContainerClassName}>
          <RCSlider
            min={min}
            max={max}
            step={step}
            handle={this.constructor.handle}
            defaultValue={min}
            onChange={this.handleChange}
            maximumTrackStyle={{ backgroundColor: 'white', height: 5 }}
            minimumTrackStyle={{ backgroundColor: 'white', height: 5 }}
            handleStyle={{
              borderColor: 'blue',
              height: 18,
              width: 18,
              border: 0,
              marginTop: -6,
              backgroundColor: 'white',
            }}
          />
        </div>
        <div className={ThirdLineContainer}>
          <div className={style.MinValue}>
            {preffix} {numberWithDot(min)}
          </div>
          <div className={flexStyle['flex-1']} />
          <div className={style.MaxValue}>
            {preffix} {numberWithDot(max)}
          </div>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  title: PropTypes.string,
  preffix: PropTypes.string,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default Slider;
