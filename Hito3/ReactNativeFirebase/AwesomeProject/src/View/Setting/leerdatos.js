import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, ImageBackground} from 'react-native';

import CTextField from '../../Components/CTextField';
import Button from '../../Components/login/Button';
import FirebasePlugin, {firestore} from '../../plugins/firebase/Firebase';

import Constants from '../../Config/Constants';
import Utils from '../../utils/utils';
import Images from '../../Config/Images';

const SettingTurism = () => {
  const [turismTitle, setTurismTitle] = useState('');
  const [errorTurismTitle, setErrorTurismTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [turismDescription, setTurismDescription] = useState('');
  const [errorTurismDescription, setErrorTurismDescription] = useState('');

  const [turismSchedule, setTurismSchedule] = useState('');
  const [errorTurismSchedule, setErrorTurismSchedule] = useState('');

  const [turismLocation, setTurismLocation] = useState('');
  const [errorTurismLocation, setErrorTurismLocation] = useState('');
  
  const [turismPhone, setTurismPhone] = useState('');
  const [errorTurismPhone, setErrorTurismPhone] = useState('');

  const [turismPriceAct, setTurismPriceAct] = useState('');
  const [errorTurismPriceAct, setErrorTurismPriceAct] = useState('');

  const validateCTextField = () => {
    let isValidField = Utils.isValidField(turismTitle);
    isValidField
      ? setErrorTurismTitle('')
      : setErrorTurismTitle(Constants.STRING.ADD_TITLE_NEWS);
    return isValidField;
  };

  const validateCTextFielddesc = () => {
    let isValidField = Utils.isValidField(turismDescription);
    isValidField
      ? setErrorTurismDescription('')
      : setErrorTurismDescription(Constants.STRING.ADD__NEWS_CONTENT);
    return isValidField;
  };

  const validateCTextFieldsched = () => {
    let isValidField = Utils.isValidField(turismSchedule);
    isValidField
      ? setErrorTurismSchedule('')
      : setErrorTurismSchedule(Constants.STRING.ADD_DATE_NEWS);
    return isValidField;
  };

  const validateCTextFieldloca = () => {
    let isValidField = Utils.isValidField(turismLocation);
    isValidField
      ? setErrorTurismLocation('')
      : setErrorTurismLocation(Constants.STRING.ADD_DATE_NEWS);
    return isValidField;
  };

  const validateCTextFieldpho = () => {
    let isValidField = Utils.isValidField(turismPhone);
    isValidField
      ? setErrorTurismPhone('')
      : setErrorTurismPhone(Constants.STRING.ADD_DATE_NEWS);
    return isValidField;
  };

  const validateCTextFieldprice = () => {
    let isValidField = Utils.isValidField(turismPriceAct);
    isValidField
      ? setErrorTurismPriceAct('')
      : setErrorTurismPriceAct(Constants.STRING.ADD_DATE_NEWS);
    return isValidField;
  };

  const onPressAdd = () => {
    let isValid = validateCTextField();
    if (isValid) {
      getTurismP();
    } else {
      Alert.alert(Constants.STRING.REVIEW_NEWS_CONTENT);
    }
  };

  const getTurismP = async() => {
    firestore.collection('Turism').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
  
  }

  const addContentNews = () => {
    const newsAddedRef = firestore.collection('Turism').doc();

    newsAddedRef
      .set({
        turismTitle: turismTitle,
        turismDesc: turismDescription,
        turismSche: turismSchedule,
        turismLoca: turismLocation,
        turismPho: turismPhone,
        turismPrice: turismPriceAct
      })
      .then(function () {
        setIsLoading(false);
        Alert.alert('New creado:', newsAddedRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };


  return (
      <View style={styles.container}>
        <CTextField
          value={turismTitle}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_TITLE}
          error={errorTurismTitle}
          onChange={(newTurismTitle) => {
            setTurismTitle(newTurismTitle);
          }}
          onValidate={validateCTextField}
        />

        <CTextField
          value={turismDescription}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_DESC}
          error={errorTurismDescription}
          onChange={(newTurismDescription) => {
            setTurismDescription(newTurismDescription);
          }}
          onValidate={validateCTextFielddesc}
        />

        <CTextField
          value={turismSchedule}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_SCHEDULE}
          error={errorTurismSchedule}
          onChange={(newTurismSchedule) => {
            setTurismSchedule(newTurismSchedule);
          }}
          onValidate={validateCTextFieldsched}
        />

        <CTextField
          value={turismLocation}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_LOCAT}
          error={errorTurismLocation}
          onChange={(newTurismLocation) => {
            setTurismLocation(newTurismLocation);
          }}
          onValidate={validateCTextFieldloca}
        />

        <CTextField
          value={turismPhone}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_PHONE}
          error={errorTurismPhone}
          onChange={(newTurismPhone) => {
            setTurismPhone(newTurismPhone);
          }}
          onValidate={validateCTextFieldpho}
        />

        <CTextField
          value={turismPriceAct}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_PRICE}
          error={errorTurismPriceAct}
          onChange={(newTurismPriceAct) => {
            setTurismPriceAct(newTurismPriceAct);
          }}
          onValidate={validateCTextFieldprice}
        />

        <Button
          titleButton={Constants.STRING.ADD_EMAIL_BUTTON}
          onPress={onPressAdd}
          isLoading={isLoading}
        />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  }
});

export default SettingTurism;
