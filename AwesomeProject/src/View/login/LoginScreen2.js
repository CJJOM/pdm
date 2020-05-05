import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Alert } from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/TextInput';
import LogoLogin from '../../Components/login/Logo';
import EmailTextField from '../../Components/login/EmailTextField';
import DismissKeyboard from '../../Components/login/DismissKeyboard';
import FirebasePlugin from '../../plugins/firebase/Firebase';

import Utils from '../../utils/utils';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const _validateEmailAddress = () => {
    let isValidEmail = Utils.isValidEmail(email);
    isValidEmail ? setErrorEmail('') : setErrorEmail(Constants.STRING.EMAIL_ERROR);
    return isValidEmail;
  }

  const _validatePassword = () => {
    let isValidPassword = Utils.isValidField(password);
    isValidPassword ? setErrorPassword('') : setErrorPassword(Constants.STRING.USERNAME_ERROR);
    return isValidPassword;
  }

  const _onPress = () => {
    //console.log('press button!!!');
    let emailData = _validateEmailAddress();
    let passwordData = _validatePassword();

    if (emailData && passwordData) {
      LoginApp(email, password);
    } else {
      Alert.alert('valores no aceptados!!');
    }
  }

  const LoginApp = (email, password) => {
    try {
      FirebasePlugin.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          Alert.alert('Usuario logeado');
        })
        .catch((error) => {
          FirebasePlugin.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
              debugger;
              navigation.navigate('Register');
              Alert.alert('Usuario Creado');
            })
            .catch((error) => {
              Alert.alert(error.message);
            })
        })
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={stylesLoginScreen.container} behavior="height" enabled>
        <View style={stylesLoginScreen.container}>
          <SafeAreaView>
            <LogoLogin style={stylesLoginScreen.logo} />
            <View style={stylesLoginScreen.form}>
              <EmailTextField
                onChangeText={(email) => { setEmail(email) }}
                onEndEditing={_validateEmailAddress}
                source={Images.USERNAME}
                error={errorEmail}
                placeholder={Constants.STRING.EMAIL}
                secureTextEntry={false}
                autoCorrect={false}>
              </EmailTextField>
              <TextInputLogin
                onChangeText={(password) => { setPassword(password) }}
                onEndEditing={_validatePassword}
                source={Images.PASSWORD}
                error={errorPassword}
                placeholder={Constants.STRING.PASSWORD}
                secureTextEntry={true}
                autoCorrect={false}>
              </TextInputLogin>
              <ButtonLogin
                onPress={_onPress}
                titleButton={Constants.STRING.TITLE_BUTTON}>
              </ButtonLogin>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
  },
  logo: { width: '100%', resizeMode: 'contain', alignSelf: 'center' },
  form: { justifyContent: 'center', width: '80%' },
});

export default LoginScreen;