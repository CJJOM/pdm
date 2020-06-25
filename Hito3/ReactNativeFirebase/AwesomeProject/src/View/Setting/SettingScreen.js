import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, ImageBackground} from 'react-native';

import CTextField from '../../Components/CTextField';
import Button from '../../Components/login/Button';
import FirebasePlugin, {firestore} from '../../plugins/firebase/Firebase';

import Constants from '../../Config/Constants';
import Utils from '../../utils/utils';
import Images from '../../Config/Images';

const SettingScreen = () => {
  const [userId, setUserId] = useState('');
  const [errorUserId, setErrorUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [appId, setappId] = useState('');
  const [errorAppid, setErrorAppId] = useState('');

  const [nameApp, setNameApp] = useState('');
  const [errorNameApp, setErrorNameApp] = useState('');

  const validateCTextField = () => {
    let isValidField = Utils.isValidField(userId);
    isValidField
      ? setErrorUserId('')
      : setErrorUserId(Constants.STRING.ENTER_EMAIL);
    return isValidField;
  };

   const validateCTextFieldname = () => {
    let isValidField = Utils.isValidField(appId);
    isValidField
      ? setErrorAppId('')
      : setErrorAppId(Constants.STRING.ENTER_EMAIL);
    return isValidField;
  };

  const validateCTextFieldapp = () => {
    let isValidField = Utils.isValidField(nameApp);
    isValidField
      ? setErrorNameApp('')
      : setErrorNameApp(Constants.STRING.ENTER_EMAIL);
    return isValidField;
  };

  const onPressAdd = () => {
    let isValid = validateCTextField();
    if (isValid) {
      addEmailRowToFirebase();
    } else {
      Alert.alert(Constants.STRING.REVIEW_EMAIL);
    }
  };

  const addGroupEmails = (emailID, userID,emailName) => {
    const emailsAddedRef = firestore
      .collection('JOMAR').doc()
      .collection('GITHUB_APPS').doc()
      .collection('REACT')
      .doc('REACT_NATIVE');

    emailsAddedRef
      .set({
        userID: userID,
        emailID: emailID,
        emailName:emailName
      })
      .then(function () {
        setIsLoading(false);
        Alert.alert('USER ID creado:', emailsAddedRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };

  const addEmailRowToFirebase = () => {
    setIsLoading(true);

    const emailRef = firestore.collection('REACT_NATIVE').doc();
    const userID = FirebasePlugin.auth().currentUser.uid;

    emailRef
      .set({
        emailID: appId,
        emailName: nameApp,
        userID: userId,
      })
      .then(function () {
        setIsLoading(false);
        addGroupEmails(userId,appId,nameApp);
        Alert.alert('Email creado:', emailRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };

  return (
    <ImageBackground style={styles.backgroundImage} source={Images.BACKG2}>
      <View style={styles.container}>
        <CTextField
          value={userId}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_USERID}
          error={errorUserId}
          onChange={(newEmailName) => {
            setUserId(newEmailName);
          }}
          onValidate={validateCTextField}
        />

        <CTextField
          value={appId}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_APPID}
          error={errorAppid}
          onChange={(newEmailName) => {
            setappId(newEmailName);
          }}
          onValidate={validateCTextFieldapp}
        />

        <CTextField
          value={nameApp}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_NAMEAPP}
          error={errorNameApp}
          onChange={(newEmailName) => {
            setNameApp(newEmailName);
          }}
          onValidate={validateCTextFieldname}
        />

        <Button
          titleButton={Constants.STRING.ADD_EMAIL_BUTTON}
          onPress={onPressAdd}
          isLoading={isLoading}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default SettingScreen;
