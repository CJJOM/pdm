import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  ImageBackground
} from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/TextInput';
import EmailTextField from '../../Components/login/EmailTextField';
import DismissKeyboard from '../../Components/login/DismissKeyboard';
import FirebasePlugin from '../../plugins/firebase/Firebase';

import Utils from '../../utils/utils';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

const LoginScreen = ({route}) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const _validateEmailAddress = () => {
    let isValidEmail = Utils.isValidEmail(email);
    isValidEmail
      ? setErrorEmail('')
      : setErrorEmail(Constants.STRING.EMAIL_ERROR);
    return isValidEmail;
  };

  const _validatePassword = () => {
    let isValidPassword = Utils.isValidField(password);
    isValidPassword
      ? setErrorPassword('')
      : setErrorPassword(Constants.STRING.USERNAME_ERROR);
    return isValidPassword;
  };

  const _onPressLogin = () => {
    //console.log('press button!!!');
    let emailData = _validateEmailAddress();
    let passwordData = _validatePassword();

    if (emailData && passwordData) {
      LoginApp(email, password);
    } else {
      Alert.alert('valores no aceptados!!');
    }
  };

  const _onPressRegister = () => {
    navigation.navigate('Register');
  };

  const LoginApp = (email, password) => {
    try {
      FirebasePlugin.auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          //setIsLoading(false);
          route.params.route.params.setIsLogged(true);
          // navigation.navigate('App');
          
        })
        .catch((error) => {
          //setIsLoading(false);
          Alert.alert('Invalid value', error.message);
        });
    } catch (error) {
 //setIsLoading(true);
      Alert.alert(error.message);
    }
  };

  return (
    <ImageBackground
    style={stylesLoginScreen.backgroundImage}
    source={Images.BACKG}
    >
      <DismissKeyboard>
      <KeyboardAvoidingView
        style={stylesLoginScreen.container}
        behavior="height"
        enabled>
        <View style={stylesLoginScreen.container}>
          <SafeAreaView>
            <View style={stylesLoginScreen.form}>
              <EmailTextField
                onChangeText={(email) => {
                  setEmail(email);
                }}
                onEndEditing={_validateEmailAddress}
                source={Images.EMAIL}
                error={errorEmail}
                placeholder={Constants.STRING.EMAIL}
                secureTextEntry={false}
                autoCorrect={false}></EmailTextField>
              <TextInputLogin
                onChangeText={(password) => {
                  setPassword(password);
                }}
                onEndEditing={_validatePassword}
                source={Images.PASSWORD}
                error={errorPassword}
                placeholder={Constants.STRING.PASSWORD}
                secureTextEntry={true}
                autoCorrect={false}></TextInputLogin>
              <ButtonLogin
                onPress={_onPressLogin}
                titleButton={Constants.STRING.TITLE_BUTTON}></ButtonLogin>
              <ButtonLogin 
                style={stylesLoginScreen.botones}
                onPress={_onPressRegister}
                titleButton={Constants.STRING.REGISTER_FORM}></ButtonLogin>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
    </ImageBackground>
    
  );
};

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {width: '100%', resizeMode: 'contain', alignSelf: 'center'},
  form: {justifyContent: 'center', width: '80%'},
  backgroundImage: {
    height: '100%',
    resizeMode: 'stretch'
  },
  
});

export default LoginScreen;
