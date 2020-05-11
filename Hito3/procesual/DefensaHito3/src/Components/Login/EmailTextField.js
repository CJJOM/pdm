import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

import Colors from '../../Config/Colors';
import Constants from '../../Config/Constants';




const EmailTextField = ({ onChangeText, placeholder, error, onEndEditing, secureTextEntry, autoCorrect, source }) => {
  return (
    <View>
      <Text style={styles.errorText}>{error}</Text>
      <View style={styles.textFieldView}>
        <Image style={styles.inlineImg} source={source}/>
        <TextInput
          style={styles.textField}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          selectionColor={Colors.blue}
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent"
        >

        </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textField: {
    fontSize: 14,
    flex: 1,
    marginHorizontal: 20,
    paddingLeft: 20
  },
  textFieldView: {
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    backgroundColor: Colors.silver,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 20,
    height: 20,
    left: 10,
    top: 11,
  },
  errorText: {
    fontSize: 12,
    color: Colors.red,
    marginBottom: -5,
    marginHorizontal: 20,
  },
});


export default EmailTextField;