import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import Colors from '../Config/Colors';
import Images from '../Config/Images';
import Constants from '../Config/Constants';

const Sectiontwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{Constants.STRING.MI}</Text>
  <Text style={styles.parrafo}>{Constants.STRING.DES1H}</Text>
      <Text style={styles.titulo}>{Constants.STRING.VI}</Text>
  <Text style={styles.parrafo}>{Constants.STRING.DES2H}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 300
  },
  parrafo: {
    color: Colors.white,
    fontFamily: 'TofinoPersonal-Regular',
    textAlign: 'center'
  },
  titulo: {
    color: '#E7BE8B',
    fontFamily: 'Hangbird',
    fontSize: 30,
  },
});

export default Sectiontwo;
