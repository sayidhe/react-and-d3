import {hot} from "react-hot-loader/root";
import React, { Component} from "react";
import Svg from './components/Svg';
import CircleD3 from './components/Circle-d3';
import CircleReact from './components/Circle-native';
import CirclesD3 from './components/Circles-d3';
import CirclesNative from './components/Circles-native';
import AnimatedCirclesD3 from './components/Transitions-d3';
import AnimatedCirclesNative from './components/Transitions-native';
import AxisD3 from './components/Axis-d3';
import AxisNative from './components/Axis-native';
import AxisNativeProps from './components/Axis-native-props';
import ChartWithDimensions from './components/Chart-with-Dimensions';
import Counter from './components/Input-with-delay'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Svg />
      <CircleD3 />
      <CircleReact />
      <CirclesD3 />
      <CirclesNative />
      <AnimatedCirclesD3 />
      <AnimatedCirclesNative />
      <AxisD3 />
      <AxisNative />
      <AxisNativeProps domain={[0, 100]} range={[10, 290]} />
      <ChartWithDimensions />
      <Counter />
    </div>
  )
}

export default hot(App);
