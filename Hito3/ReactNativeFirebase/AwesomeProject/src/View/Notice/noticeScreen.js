import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, ImageBackground} from 'react-native';
import Colors from '../../Config/Colors';
import ButtonIcon from '../../Components/ButtonIcon';
import Images from '../../Config/Images';
import FirebasePlugin from '../../plugins/firebase/Firebase';
import CardN from '../../Components/cardN';
import Carousel from '../../Components/Carousel';
import {dummyData} from '../../Components/data/Data';
import Constants from '../../Config/Constants';
import {dummyData2} from '../../Components/data/Data2';

const NoticeScreen = ({navigation}) => {
  /*const onPressSetting = () => {
    navigation.navigate('Setting');
  };

  const onPressLogout = () => {
    try {
      FirebasePlugin.auth()
        .signOut()
        .then(() => {
          Alert.alert('Logout App', 'Successfully Logout', [
            {
              text: 'Login App',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ]);
        });
    } catch (e) {
      Alert.alert('Contact admin', e.message);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonIcon
          imageSrc={Images.SETTING}
          onPressButton={onPressSetting}></ButtonIcon>
      ),
      headerRight: () => (
        <ButtonIcon
          imageSrc={Images.LOGOUT}
          onPressButton={onPressLogout}></ButtonIcon>
      ),
    });
  });*/

  return (
    <ImageBackground style={styles.backgroundImage} source={Images.BACKG2}>
      <Text style={styles.text}>{Constants.STRING.MAINTITLE}</Text>
      <Text style={styles.text2}>{Constants.STRING.MAINTITLE2}</Text>
      <View>
        <Text style={styles.text3}>Noticias</Text>
      </View>
      <View>
        <Carousel data={dummyData2}></Carousel>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    textAlign: 'center',
    paddingTop: 60,
    fontSize: 40,
    lineHeight: 2,
    fontFamily: 'Hangbird',
    color: Colors.white,
  },
  text2: {
    textAlign: 'center',
    color: '#E7BE8B',
    fontFamily: 'TofinoPersonal-LightItalic',
    fontSize: 15,
  },
  text3: {
    textAlign: 'left',
    fontFamily: 'Hangbird',
    color: Colors.white,
    fontSize: 30,
    paddingLeft: 50,
    paddingTop: 20,
    paddingBottom: 50
  },
});

export default NoticeScreen;
