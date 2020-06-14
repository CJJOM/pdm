import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Images from '../../Config/Images';

export default class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            
            <View style={styles.container}>
                <Image source={Images.LOGO} style={styles.image}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        paddingLeft: 50,
    },
    image: {
        width: 300,
        height: 400,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
});