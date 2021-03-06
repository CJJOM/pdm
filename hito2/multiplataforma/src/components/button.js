import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../config/Colors';


export default class button extends Component {

    constructor(prop){
        super(prop);
    }



    render(){
        return (
            <View style={stylesButton.container}>
                <TouchableOpacity 
                style={stylesButton.button}
                onPress={this.props.onPress}
                >
                    <Text 
                        style={stylesButton.text}>CALCULAR
                        
                    </Text>

                </TouchableOpacity>
            </View>
        );
    }
}

const stylesButton = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#428AF8',
      marginTop: -30,
      marginBottom: 12,
      paddingVertical: 12,
      borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgba(255,255,255,0.7)',
    },
    text: {
      color: '#363636',
      textAlign: 'center',
      height: 20,
    },
  });
  