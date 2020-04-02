import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class InputCVCiudad extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text style={stylescvciudad.text}>Santa Cruz</Text>
                <Text style={stylescvciudad.text2}>Casos Confirmados</Text>
                <TextInput style={stylescvciudad.input}>Nro de Casos</TextInput>
                <Text style={stylescvciudad.text2}>Casos Sospechosos</Text>
                <TextInput style={stylescvciudad.input}>Nro de Casos</TextInput>
            </View>
            
        );
    }
}

const stylescvciudad = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    image: {
        width: 200,
        height: 80,
    },
    text: {
        color: '#5E5755',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
        textAlign: "center"
    },
    text2: {
        color: '#5E5755',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
    input: {
        backgroundColor: '#5E5755',
        width: 150,
        alignItems: 'center',
        height: 40,
        marginHorizontal: 20,
        borderRadius: 20,
        marginBottom: 15,
        textAlign: 'center'
      },
});