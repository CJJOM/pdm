import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';
import ButtonLogin from '../../Components/Login/Button';

const MiappScreen = ({navigation}) => {
  const onPress = () => {
    console.log('register');
  };

  return (
    <View style={styles.container}>
      <Text>Miapp Screen</Text>
      <ButtonLogin onPress={onPress} titleButton={Constants.STRING.REGISTER} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
});

export default MiappScreen;