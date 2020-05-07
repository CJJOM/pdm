import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Alert, Text, Image } from 'react-native';

import Button_pn from '../../Components/Login/Button';
import TextInputLogin from '../../Components/Login/TextInput';
import LogoLogin from '../../Components/Login/Logo';
import EmailTextField from '../../Components/Login/EmailTextField';
import DismissKeyboard from '../../Components/Login/DismissKeyboard';
import FirebasePlugin from '../../Plugins/firebase/Firebase';

import Utils from '../../Utils/utils';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

const Defensah3Screen = ({ navigation }) => {
  const _onPressn = () => {
    navigation.navigate('FIREBASE');
  };

  const _onPressp = () => {
    navigation.navigate('PDMScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={Images.FDEFH3}
      >
      </Image>
      <Text style={styles.text1}>{Constants.STRING.DEF_H3}</Text>
    <Text style={styles.text}>Univ: Jomar Camacho{"\n"}Gestión 2020</Text>
      <View style={styles.containerbutton}>
        <Button_pn
          onPress={_onPressp}
          titleButton={Constants.STRING.BUTTON_P}
        >
        </Button_pn>
        <Button_pn
          onPress={_onPressn}
          titleButton={Constants.STRING.BUTTON_N}
        >
        </Button_pn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.orange
  },
  text: {
    width: 380,
        textAlign: 'center',
        color: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        paddingLeft: 20,
        paddingBottom: 230
  },
  text1: {
    textAlign:'center',
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 20
  },
  containerbutton: {
    flex: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
  },
  imagen: {
    width: '100%',
    height: 450,
    marginTop: -70,
    marginLeft: 100
  }
});

export default Defensah3Screen;