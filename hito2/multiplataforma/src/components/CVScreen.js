'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Boton from '../components/button';

export default class InputCVCiudad extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={stylescvscreen.container}>
                <Text style={stylescvscreen.text}>Oruro</Text>
                <Text style={stylescvscreen.text2}>Casos Confirmados</Text>
                <TextInput style={stylescvscreen.input}>Nro de Casos</TextInput>
                <Text style={stylescvscreen.text2}>Casos Sospechosos</Text>
                <TextInput style={stylescvscreen.input}>Nro de Casos</TextInput>

                <TextInput style={stylescvscreen.input2}>Ingrese Busqueda</TextInput>
                <Boton style={stylescvscreen.boton}></Boton>
            </View>
           
            
        );
    }
}

const stylescvscreen = StyleSheet.create({
    container: {
        paddingBottom: 150,
        flex: 1,
        marginTop: 5,
    },
    text: {
        color: '#5E5755',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 5,
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
        marginBottom: 5,
        textAlign: 'center'
      },
      input2: {
        backgroundColor: '#5E5755',
        width: 180,
        height: 40,
        marginHorizontal: 115,
        borderRadius: 20,
        marginBottom: 50,
        textAlign: 'center',
      },
     
      
});