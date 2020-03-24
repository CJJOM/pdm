import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyComponent from './src/test/MyComponent';
import Logo from './src/test/login/logo';

import Input from './src/test/login/input';
import imgPassword from './src/test/images/pass.png';
import Constants from './src/test/login/constants';
import imgUsername from './src/test/images/username.png';

const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <MyComponent style={styles.box} text="Hola mundo desde React Native"></MyComponent>
        <MyComponent style={styles.box} text="Jomar Camacho"></MyComponent>
        <Logo style={styles.box}></Logo>

        <Input
          source={imgPassword}
          placeholder={Constants.PASS}
          secureTextEntry={false}
          autoCorrect={false}
        ></Input>

        <Input
          source={imgUsername}
          placeholder={Constants.USER}
          secureTextEntry={false}
          autoCorrect={false}
        ></Input>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingBottom: 400,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    height: 100,
  },
});

export default App;
