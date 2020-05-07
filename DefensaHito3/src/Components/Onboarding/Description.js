import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Colors from '../../Config/Colors';


export default class Description extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imagen}
                    source={this.props.imagenes}
                ></Image>
                <Text style={styles.text1}>{this.props.title1}</Text>
                <Text style={styles.text}>{this.props.desc1}</Text>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.green,
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        paddingBottom: 270
    },
    text1: {
        textAlign: 'center',
        paddingBottom: 20,
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    imagen: {
        width: '100%',
        height: 450,
        marginTop: -70,
        marginLeft: 100
    }
});
