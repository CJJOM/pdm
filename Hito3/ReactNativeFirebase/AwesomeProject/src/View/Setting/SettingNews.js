import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, ImageBackground} from 'react-native';

import CTextField from '../../Components/CTextField';
import Button from '../../Components/login/Button';
import FirebasePlugin, {firestore} from '../../plugins/firebase/Firebase';

import Constants from '../../Config/Constants';
import Utils from '../../utils/utils';
import Images from '../../Config/Images';

const SettingNews = () => {
  const [newsTitle, setNewsTitle] = useState('');
  const [errorNewsTitle, setErrorNewsTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [newsContent, setNewsContent] = useState('');
  const [errorNewsContent, setErrorNewsContent] = useState('');

  const [newsDate, setNewsDate] = useState('');
  const [errorNewsDate, setErrorNewsDate] = useState('');

  const validateCTextField = () => {
    let isValidField = Utils.isValidField(newsTitle);
    isValidField
      ? setErrorNewsTitle('')
      : setErrorNewsTitle(Constants.STRING.ADD_TITLE_NEWS);
    return isValidField;
  };

  const validateCTextFieldname = () => {
    let isValidField = Utils.isValidField(newsContent);
    isValidField
      ? setErrorNewsContent('')
      : setErrorNewsContent(Constants.STRING.ADD__NEWS_CONTENT);
    return isValidField;
  };

  const validateCTextFieldapp = () => {
    let isValidField = Utils.isValidField(newsDate);
    isValidField
      ? setErrorNewsDate('')
      : setErrorNewsDate(Constants.STRING.ADD_DATE_NEWS);
    return isValidField;
  };

  const onPressAdd = () => {
    let isValid = validateCTextField();
    if (isValid) {
      addContentNews(newsTitle, newsContent, newsDate);
    } else {
      Alert.alert(Constants.STRING.REVIEW_NEWS_CONTENT);
    }
  };

  const addContentNews = () => {
    const newsAddedRef = firestore.collection('News').doc();

    newsAddedRef
      .set({
        newsTITLE: newsTitle,
        newsCONTENT: newsContent,
        newsDATE: newsDate,
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

  const addContentRowToFirebase = () => {
    setIsLoading(true);

    const newsContentRef = firestore.collection('News');
    const userID = FirebasePlugin.auth().currentUser.uid;

    newsContentRef
      .set({
        newsTITLE: newsTitle,
        newsCONTENT: newsContent,
        newsDATE: newsDate,
      })
      .then(function () {
        setIsLoading(false);
        addGroupEmails(newsTitle, newsContent, newsDate);
        Alert.alert('Email creado:', newsContentRef.id);
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
          value={newsTitle}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_TITLE}
          error={errorNewsTitle}
          onChange={(newNewsTitle) => {
            setNewsTitle(newNewsTitle);
          }}
          onValidate={validateCTextField}
        />

        <CTextField
          value={newsContent}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD__NEWS_CONTENT}
          error={errorNewsContent}
          onChange={(newNewsContent) => {
            setNewsContent(newNewsContent);
          }}
          onValidate={validateCTextFieldapp}
        />

        <CTextField
          value={newsDate}
          autoCorrect={false}
          placeholder={Constants.STRING.ADD_DATE_NEWS}
          error={errorNewsDate}
          onChange={(newNewsDate) => {
            setNewsDate(newNewsDate);
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

export default SettingNews;
