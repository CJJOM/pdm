import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button } from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class InputCVCiudad extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={stylescvcasos.container}>
                <Text style={stylescvcasos.text}>Cochabamba</Text>
                <Text style={stylescvcasos.text2}>Casos Confirmados</Text>
                <TextInput style={stylescvcasos.input}>Nro de Casos</TextInput>
                <Text style={stylescvcasos.text2}>Casos Sospechosos</Text>
                <TextInput style={stylescvcasos.input}>Nro de Casos</TextInput>
               
            </View>
            
        );
    }
}

const stylescvcasos = StyleSheet.create({
    container: {
        paddingBottom: 50,
        flex: 1,
        marginTop: 5,
    },
    image: {
        width: 200,
        height: 80,
    },
    text: {
        color: '#5E5755',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        textAlign: "center"
    },
    text2: {
        color: '#5E5755',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 5,
    },
    input: {
        backgroundColor: '#5E5755',
        width: 150,
        alignItems: 'center',
        height: 40,
        marginHorizontal: 20,
        borderRadius: 20,
        textAlign: 'center'
      },
});