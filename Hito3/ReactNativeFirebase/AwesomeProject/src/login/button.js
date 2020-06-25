import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import Constants from './constants';
import {Colors} from '../Config/Colors';


export default class button extends Component {

    constructor(prop){
        super(prop);

        this._onPress = this._onPress.bind(this);
    }

    _onPress(){
        console.log('Click Button!!');
        console.log(this.props.pass);
        console.log(this.props.username);
        
    }

    render(){
        return (
            <View>
                <TouchableOpacity style={stylesButton.button}
                onPress={this._onPress}>
                    <Text 
                        style={stylesButton.text}>{Constants.TITLE_BUTTON}
                        
                    </Text>

                </TouchableOpacity>
            </View>
        );
    }
}

const stylesButton = StyleSheet.create({
    container: {
      flex: 1,
      top: -95,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.dark,
      height: Constants.DEFAULT_MARGIN_BUTTON,
      borderRadius: 50,
      zIndex: 100,
    },
    circle: {
      height: Constants.DEFAULT_MARGIN_BUTTON,
      width: Constants.DEFAULT_MARGIN_BUTTON,
      marginTop: -Constants.DEFAULT_MARGIN_BUTTON,
      borderWidth: 1,
      borderColor: '#F035E0',
      borderRadius: 50,
      alignSelf: 'center',
      zIndex: 99,
      backgroundColor: '#F035E0',
    },
    text: {
      color: 'white',
      backgroundColor: 'transparent',
    },
    image: {
      width: 24,
      height: 24,
    },
  });
  