/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CVlogo from './src/components/CVLogo';
import CVCasos from './src/components/CVCasos';
import CVCiudad from './src/components/CVCiudad';
import CVScreen from './src/components/CVScreen';
import {
  StyleSheet,
  StatusBar,
 
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
     <CVlogo></CVlogo>
     <CVCasos></CVCasos>
    <CVCiudad></CVCiudad>
    <CVScreen></CVScreen>
    </>
  );
};

export default App;
