import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';

import imgLogo from '../images/Covid-19.png';

export default class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            
            <View style={styles.container}>
                <Image source={imgLogo} style={styles.image}></Image>
                <Text style={styles.text}>Epidemia Corona Virus</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    },
});