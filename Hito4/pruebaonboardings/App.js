/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import MainNavigator from 'hito4jom/src/Navigator/MainNavigator';

const App: () => React$Node = () => {
  return (
    <>
      <MainNavigator></MainNavigator>
    </>
  );
};


export default App;
