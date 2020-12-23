import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, ImageBackground, Image} from 'react-native';
import Colors from '../../Config/Colors';
import ButtonIcon from '../../Components/ButtonIcon';
import Images from '../../Config/Images';
import FirebasePlugin from '../../plugins/firebase/Firebase';
import Sectionone from '../../Components/sectionone';
import Sectiontwo from '../../Components/sectiontwo';
import Constants from '../../Config/Constants';
import { ScrollView } from 'react-native-gesture-handler';

const AppScreen = ({navigation}) => {
  const onPressSetting = () => {
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
  });

  return (
    <ImageBackground style={styles.backgroundImage} source={Images.BACKG}>
    <ScrollView>
        <Text style={styles.text}>{Constants.STRING.MAINTITLE}</Text>
        <Text style={styles.text2}>{Constants.STRING.MAINTITLE2}</Text>
        <Sectionone></Sectionone>
        <Sectiontwo></Sectiontwo>
        <View>
          <Image
          style={styles.imagenes} 
          source={Images.TRAZADO}></Image>
        </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
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
  },
  imagenes:{
    width: 190,
    height: 190,
  }
});

export default AppScreen;
