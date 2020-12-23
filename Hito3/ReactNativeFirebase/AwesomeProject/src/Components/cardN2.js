import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Colors from '../Config/Colors';

const {width, height} = Dimensions.get('window')

const cardN2 = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{uri: item.url}}></Image>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: 400,
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    position: 'absolute',
    top: 240,
    margin: 10,
    left: 5,
  },

  image: {
    width: width - 20,
    height: 250,
    borderRadius: 10,
  },

  itemTitle: {
    color: Colors.dark,
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },

  itemDescription: {
    color: Colors.dark,
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default cardN2;
