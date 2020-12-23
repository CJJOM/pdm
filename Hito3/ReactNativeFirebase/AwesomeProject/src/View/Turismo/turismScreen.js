import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, ImageBackground} from 'react-native';
import Colors from '../../Config/Colors';
import Images from '../../Config/Images';
import FirebasePlugin from '../../plugins/firebase/Firebase';
import Carousel from '../../Components/Carousel';
import { dummyData } from '../../Components/data/Data';
import Constants from '../../Config/Constants';

const TurismScreen = ({navigation}) => {

  return (
    <ImageBackground style={styles.backgroundImage} source={Images.BACKG2}>
      <Text style={styles.text}>{Constants.STRING.MAINTITLE}</Text>
  <Text style={styles.text2}>{Constants.STRING.MAINTITLE2}</Text>
      <View>
        <Text style={styles.text3}>Turismo</Text>
      </View>
      <View>
        <Carousel data = {dummyData}></Carousel>
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

export default TurismScreen;
