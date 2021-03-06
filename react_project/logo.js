import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import imgLogo from '../images/logo.png';

export default class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            
            <View style={styles.container}>
                <Image source={imgLogo} style={styles.image}></Image>
                <Text style={styles.text}>COCHA</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
});